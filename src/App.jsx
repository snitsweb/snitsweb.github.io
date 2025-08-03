import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion.jsx'
import { Trash2, Plus, Download, Upload, PieChart, BarChart3 } from 'lucide-react'
import { PieChart as RechartsPieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './App.css'

function App() {
  const [monthlyBudget, setMonthlyBudget] = useState(0)
  const [categories, setCategories] = useState([])
  const [newCategoryName, setNewCategoryName] = useState('')
  const [newCategoryAllocation, setNewCategoryAllocation] = useState('')
  const [newCategoryType, setNewCategoryType] = useState('fixed')
  const [showDiagrams, setShowDiagrams] = useState(false)

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('budgetPlannerData')
    if (savedData) {
      const data = JSON.parse(savedData)
      setMonthlyBudget(data.monthlyBudget || 0)
      setCategories(data.categories || [])
    }
  }, [])

  // Save data to localStorage whenever state changes
  useEffect(() => {
    const data = {
      monthlyBudget,
      categories
    }
    localStorage.setItem('budgetPlannerData', JSON.stringify(data))
  }, [monthlyBudget, categories])

  const addCategory = () => {
    if (newCategoryName.trim() && newCategoryAllocation) {
      const newCategory = {
        id: Date.now(),
        name: newCategoryName.trim(),
        allocated: parseFloat(newCategoryAllocation),
        type: newCategoryType,
        spends: []
      }
      setCategories([...categories, newCategory])
      setNewCategoryName('')
      setNewCategoryAllocation('')
    }
  }

  const removeCategory = (categoryId) => {
    setCategories(categories.filter(cat => cat.id !== categoryId))
  }

  const addSpend = (categoryId, amount, type) => {
    setCategories(categories.map(cat => {
      if (cat.id === categoryId) {
        const newSpend = {
          id: Date.now(),
          amount: parseFloat(amount),
          type: type,
          date: new Date().toISOString().split('T')[0]
        }
        return { ...cat, spends: [...cat.spends, newSpend] }
      }
      return cat
    }))
  }

  const removeSpend = (categoryId, spendId) => {
    setCategories(categories.map(cat => {
      if (cat.id === categoryId) {
        return { ...cat, spends: cat.spends.filter(spend => spend.id !== spendId) }
      }
      return cat
    }))
  }

  const calculateCategoryBudget = (category) => {
    if (category.type === 'percent') {
      return (monthlyBudget * category.allocated) / 100
    }
    return category.allocated
  }

  const calculateCategorySpent = (category) => {
    return category.spends.reduce((total, spend) => {
      if (spend.type === 'percent') {
        return total + (monthlyBudget * spend.amount) / 100
      }
      return total + spend.amount
    }, 0)
  }

  const calculateTotalAllocated = () => {
    return categories.reduce((total, cat) => total + calculateCategoryBudget(cat), 0)
  }

  const calculateTotalSpent = () => {
    return categories.reduce((total, cat) => total + calculateCategorySpent(cat), 0)
  }

  // Chart data preparation
  const preparePieChartData = () => {
    const categoryData = categories.map(cat => ({
      name: cat.name,
      value: calculateCategoryBudget(cat),
      spent: calculateCategorySpent(cat),
      remaining: calculateCategoryBudget(cat) - calculateCategorySpent(cat)
    }))
    
    const unallocated = monthlyBudget - calculateTotalAllocated()
    if (unallocated > 0) {
      categoryData.push({
        name: 'Unallocated',
        value: unallocated,
        spent: 0,
        remaining: unallocated
      })
    }
    
    return categoryData
  }

  const prepareBarChartData = () => {
    return categories.map(cat => ({
      name: cat.name,
      allocated: calculateCategoryBudget(cat),
      spent: calculateCategorySpent(cat),
      remaining: calculateCategoryBudget(cat) - calculateCategorySpent(cat)
    }))
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF7C7C', '#8DD1E1', '#D084D0']

  const exportData = () => {
    const data = { monthlyBudget, categories }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'budget-data.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const importData = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result)
          setMonthlyBudget(data.monthlyBudget || 0)
          setCategories(data.categories || [])
        } catch (error) {
          alert('Invalid file format')
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">Budget Planner</h1>
        
        {/* Budget Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Budget Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="font-medium">Monthly Budget (PLN):</label>
              <Input
                type="number"
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(parseFloat(e.target.value) || 0)}
                className="w-32"
                placeholder="0"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Monthly Budget</p>
                <p className="text-2xl font-bold">{monthlyBudget.toFixed(2)} PLN</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Total Allocated</p>
                <p className="text-2xl font-bold">{calculateTotalAllocated().toFixed(2)} PLN</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Total Spent</p>
                <p className="text-2xl font-bold">{calculateTotalSpent().toFixed(2)} PLN</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Remaining Budget</p>
              <p className={`text-2xl font-bold ${(monthlyBudget - calculateTotalSpent()) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {(monthlyBudget - calculateTotalSpent()).toFixed(2)} PLN
              </p>
            </div>
          </CardContent>
        </Card>
        {/* Data Management */}
        <Card>
          <CardHeader>
            <CardTitle>Data Management</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button onClick={exportData} className="flex items-center space-x-2">
              <Download size={16} />
              <span>Export Data</span>
            </Button>
            <div className="relative">
              <input
                type="file"
                accept=".json"
                onChange={importData}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <Button className="flex items-center space-x-2">
                <Upload size={16} />
                <span>Import Data</span>
              </Button>
            </div>
            <Button 
              onClick={() => setShowDiagrams(!showDiagrams)} 
              variant={showDiagrams ? "default" : "outline"}
              className="flex items-center space-x-2"
            >
              {showDiagrams ? <BarChart3 size={16} /> : <PieChart size={16} />}
              <span>{showDiagrams ? 'Hide Charts' : 'Show Charts'}</span>
            </Button>
          </CardContent>
        </Card>
        {/* Add Category */}
        <Card>
          <CardHeader>
            <CardTitle>Add New Category</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center space-x-4 space-y-2">
              <Input
                placeholder="Category name"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                className="flex-1 min-w-32"
              />
              <Input
                type="number"
                placeholder="Amount/Percentage"
                value={newCategoryAllocation}
                onChange={(e) => setNewCategoryAllocation(e.target.value)}
                className="w-32"
              />
              <select
                value={newCategoryType}
                onChange={(e) => setNewCategoryType(e.target.value)}
                className="px-3 py-2 border border-input rounded-md bg-background"
              >
                <option value="fixed">Fixed Amount (PLN)</option>
                <option value="percent">Percentage (%)</option>
              </select>
              <Button onClick={addCategory} className="flex items-center space-x-2">
                <Plus size={16} />
                <span>Add</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Budget Visualization */}
        {showDiagrams && categories.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pie Chart - Budget Allocation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart size={20} />
                  <span>Budget Allocation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={preparePieChartData()}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value.toFixed(0)} PLN`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {preparePieChartData().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value, name, props) => {
                        const total = preparePieChartData().reduce((sum, item) => sum + item.value, 0);
                        const percentage = ((value / total) * 100).toFixed(1);
                        return [`${value.toFixed(2)} PLN (${percentage}%)`, 'Allocated'];
                      }}
                    />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Bar Chart - Spent vs Allocated */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 size={20} />
                  <span>Spending Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={prepareBarChartData()}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="name" 
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      interval={0}
                    />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value.toFixed(2)} PLN`} />
                    <Legend />
                    <Bar dataKey="allocated" fill="#8884d8" name="Allocated" />
                    <Bar dataKey="spent" fill="#82ca9d" name="Spent" />
                    <Bar dataKey="remaining" fill="#ffc658" name="Remaining" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Categories */}
        {categories.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Budget Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" className="w-full">
                {categories.map(category => (
                  <AccordionItem key={category.id} value={`category-${category.id}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center justify-between w-full mr-4">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{category.name}</span>
                          <Badge variant={category.type === 'percent' ? 'secondary' : 'default'}>
                            {category.type === 'percent' ? `${category.allocated}%` : `${category.allocated} PLN`}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-muted-foreground">
                            Spent: {calculateCategorySpent(category).toFixed(2)} PLN
                          </span>
                          <span className={`font-medium ${(calculateCategoryBudget(category) - calculateCategorySpent(category)) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            Remaining: {(calculateCategoryBudget(category) - calculateCategorySpent(category)).toFixed(2)} PLN
                          </span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <CategoryDetails
                        category={category}
                        monthlyBudget={monthlyBudget}
                        onRemoveCategory={removeCategory}
                        onAddSpend={addSpend}
                        onRemoveSpend={removeSpend}
                        calculateCategoryBudget={calculateCategoryBudget}
                        calculateCategorySpent={calculateCategorySpent}
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

function CategoryDetails({ category, monthlyBudget, onRemoveCategory, onAddSpend, onRemoveSpend, calculateCategoryBudget, calculateCategorySpent }) {
  const [newSpendAmount, setNewSpendAmount] = useState('')
  const [newSpendType, setNewSpendType] = useState('fixed')

  const categoryBudget = calculateCategoryBudget(category)
  const categorySpent = calculateCategorySpent(category)
  const remaining = categoryBudget - categorySpent

  const handleAddSpend = () => {
    if (newSpendAmount) {
      onAddSpend(category.id, newSpendAmount, newSpendType)
      setNewSpendAmount('')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Allocated</p>
            <p className="text-lg font-semibold">{categoryBudget.toFixed(2)} PLN</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Spent</p>
            <p className="text-lg font-semibold">{categorySpent.toFixed(2)} PLN</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Remaining</p>
            <p className={`text-lg font-semibold ${remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {remaining.toFixed(2)} PLN
            </p>
          </div>
        </div>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onRemoveCategory(category.id)}
          className="ml-4"
        >
          <Trash2 size={16} />
        </Button>
      </div>

      {/* Add Spend */}
      <div className="flex flex-wrap items-center space-x-4 space-y-2">
        <Input
          type="number"
          placeholder="Amount/Percentage"
          value={newSpendAmount}
          onChange={(e) => setNewSpendAmount(e.target.value)}
          className="w-32"
        />
        <select
          value={newSpendType}
          onChange={(e) => setNewSpendType(e.target.value)}
          className="px-3 py-2 border border-input rounded-md bg-background"
        >
          <option value="fixed">Fixed Amount (PLN)</option>
          <option value="percent">Percentage (%)</option>
        </select>
        <Button onClick={handleAddSpend} size="sm">
          Add Spend
        </Button>
      </div>

      {/* Spends List */}
      {category.spends.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium">Spends:</h4>
          {category.spends.map(spend => (
            <div key={spend.id} className="flex justify-between items-center p-2 bg-muted rounded">
              <div className="flex items-center space-x-2">
                <span>
                  {spend.type === 'percent' 
                    ? `${spend.amount}% (${((monthlyBudget * spend.amount) / 100).toFixed(2)} PLN)`
                    : `${spend.amount} PLN`
                  }
                </span>
                <Badge variant="outline">{spend.date}</Badge>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onRemoveSpend(category.id, spend.id)}
              >
                <Trash2 size={14} />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App


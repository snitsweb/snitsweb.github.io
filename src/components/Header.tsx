
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-start gap-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover ring-4 ring-blue-100"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Julian Li</h1>
            <p className="text-lg text-blue-600 mb-1">Lead Software & DevOps Engineer in San Francisco, CA</p>
            <p className="text-gray-600 mb-4">He/Him</p>
            
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Mail size={16} />
                Hire me
              </Button>
              <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                <Download size={16} />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

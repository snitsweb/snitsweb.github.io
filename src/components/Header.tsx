import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";
import ContactModal from "./ContactModal";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-6">
              <div className="relative">
                <img
                  src="/avatar.png"
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-blue-100 dark:ring-blue-900"
                />
              </div>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Oleksandr Snitsaruk</h1>
                <p className="text-lg text-blue-600 dark:text-blue-400 mb-1">Lead Full Stack & DevOps Engineer</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">JavaScript/TypeScript Stack</p>
                
                <div className="flex gap-3">
                  <Button variant="outline" className="gap-2">
                    <Mail size={16} />
                    Hire me
                  </Button>
                  <Button 
                    className="gap-2 bg-blue-600 hover:bg-blue-700"
                    onClick={() => setIsContactModalOpen(true)}
                  >
                    <Download size={16} />
                    Contact
                  </Button>
                </div>
              </div>
            </div>
            
            <ThemeToggle />
          </div>
        </div>
      </header>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default Header;

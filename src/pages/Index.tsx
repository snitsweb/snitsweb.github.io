import Header from "@/components/Header";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <About />
      <FeaturedProjects />
      <Experience />
      <Skills />
      
      <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">© 2024 Oleksandr Snitsaruk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import Header from "@/components/Header";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <About />
      <FeaturedProjects />
      <Experience />
      <Skills />
      
      <footer className="bg-white border-t py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600">© 2024 Julian Li. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

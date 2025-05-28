
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Obmify",
    image: "/projects/obmify.jpg",
    description: "Online-monitoring of cryptocurrency exchanges",
    fullDescription: "Obmify is a platform that enables users to securely and efficiently monitor and compare cryptocurrency exchange rates across multiple providers. The application features multiple dedicated UI panels for various purposes, including rate tracking, transaction history, and personalized settings. It also includes an affiliate system that allows users to earn rewards by referring others. Built using modern web technologies like Nuxt, Vue, TypeScript, and Tailwind CSS, Obmify offers a smooth, responsive user experience with support for dark mode and engaging animations.",
    technologies: ["Nuxt", "Vue", "TypeScript", "Node.js", "Nest.js", "PostgreSQL", "Kubernetes", "Cloudflare", "Grafana", "Prometheus"],
    liveLink: "https://obmify.com/en",
  },
  {
    title: "Sky VIP Services",
    image: "/projects/skyvip.jpg",
    description: "Global Airport Concierge & VIP Assistance",
    fullDescription: "SkyVIP Services is the world’s largest provider of airport meet-and-greet and concierge solutions, operating in over 500 airports worldwide. The platform offers three tiers of VIP service—Silver (Meet & Greet), Gold (VIP Lounge), and Black (Private Suite)—designed to streamline every aspect of travel, from fast-track immigration to tarmac car transfers and private lounge access. The system includes a feature-rich admin panel and CRM for efficient order management, allowing staff to coordinate bookings, track flights, and manage customer preferences with ease. Whether for business travelers, families, or those needing extra assistance, SkyVIP ensures a stress-free airport experience with 24/7 global support.",
    technologies: ["Nuxt", "Vue", "TypeScript", "Node.js", "Nest.js", "PostgreSQL", "Kubernetes", "Cloudflare", "NovaPost", "Stripe"],
    liveLink: "https://skyvipservices.com/",
  },
  {
    title: "O.Taje",
    image: "/projects/otaje.jpg",
    description: "Online store with womans clothes",
    fullDescription: "O.TAJE is a Ukrainian fashion brand specializing in stylish and comfortable women's knitwear. Their sale section offers up to 60% off on a variety of items, including dresses, sweaters, cardigans, and accessories, all crafted from high-quality materials like cotton, wool, and viscose. The brand emphasizes feminine comfort, combining elegance with practicality in their designs. Customers can enjoy additional discounts on purchases over 2000 UAH and receive gifts with their orders. The online store features a user-friendly interface with filters for material, size, color, and price, making shopping convenient and efficient.",
    technologies: ["Nuxt", "Vue", "TypeScript", "Node.js", "Nest.js", "PostgreSQL", "Kubernetes", "Cloudflare"],
    liveLink: "https://sale.otaje.com/en",
  }
];

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default FeaturedProjects;

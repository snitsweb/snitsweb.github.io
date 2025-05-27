
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Personal Portfolio",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    description: "A modern portfolio website built with React and TypeScript",
    fullDescription: "A comprehensive personal portfolio website showcasing my skills, projects, and experience. Built with modern web technologies including React, TypeScript, and Tailwind CSS. Features a responsive design, dark mode support, and smooth animations. The site includes sections for about me, featured projects, work experience, and skills.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router"],
    liveLink: "https://portfolio.example.com",
    githubLink: "https://github.com/username/portfolio"
  },
  {
    title: "Design System",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    description: "Comprehensive design system with reusable components",
    fullDescription: "A complete design system built for enterprise applications, featuring a comprehensive library of reusable UI components. Includes design tokens, component documentation, and usage guidelines. Built with React and styled-components, ensuring consistency across multiple applications and teams.",
    technologies: ["React", "Styled Components", "Storybook", "TypeScript", "Figma"],
    liveLink: "https://design-system.example.com",
    githubLink: "https://github.com/username/design-system"
  },
  {
    title: "Dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    description: "Analytics dashboard with real-time data visualization",
    fullDescription: "A powerful analytics dashboard providing real-time insights and data visualization. Features interactive charts, customizable widgets, and real-time data updates. Built with React and D3.js for dynamic visualizations, includes user management, data filtering, and export capabilities.",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Socket.io", "Chart.js"],
    liveLink: "https://dashboard.example.com",
    githubLink: "https://github.com/username/dashboard"
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

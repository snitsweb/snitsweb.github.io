import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  image: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  liveLink?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-sm text-gray-600 dark:text-gray-400">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg w-full max-w-[400px] mx-auto" style={{ aspectRatio: '400/250' }}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Project Details</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            {project.liveLink && (
              <Button asChild>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;

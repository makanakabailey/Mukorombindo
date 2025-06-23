import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, CheckCircle, Target, Lightbulb, X, Linkedin, Phone, Mail } from 'lucide-react';
import AIProjectChat from './AIProjectChat';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string | null;
  problemSolution: string;
  features: string[];
  challenges: string[];
  learnings: string;
  futureImprovements: string[];
}

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/50" 
        data-testid="modal-overlay"
        onClick={onClose}
      />
      <div className="relative bg-background rounded-lg shadow-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto p-6">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-gradient">{project.title}</h1>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="relative overflow-hidden rounded-xl mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex gap-3 mt-2">
              <a href="https://www.linkedin.com/in/makanaka-mukorombindo-930629312" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <Linkedin className="h-5 w-5 text-blue-700 hover:scale-110 transition-transform" />
              </a>
              <a href="tel:+263788839065" title="Call">
                <Phone className="h-5 w-5 text-green-600 hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:mkanakabailey@gmail.com" title="Email">
                <Mail className="h-5 w-5 text-red-600 hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com/makanakabailey" target="_blank" rel="noopener noreferrer" title="GitHub">
                <Github className="h-5 w-5 text-black hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Problem & Solution */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              Problem & Solution
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.problemSolution}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default" className="text-sm px-3 py-1 rounded-full">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              Features
            </h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Learnings */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Challenges & Solutions</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Key Learnings</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.learnings}
              </p>
            </div>
          </div>

          {/* Future Improvements */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              Future Improvements
            </h2>
            <ul className="space-y-2">
              {project.futureImprovements.map((improvement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{improvement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 justify-center border-t border-border pt-6">
            <Button asChild variant="default" className="rounded-full hover:scale-105 transition-transform">
              <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View Project
              </a>
            </Button>
            {project.liveUrl && (
              <Button asChild variant="outline" className="rounded-full hover:scale-105 transition-transform">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>

          {/* AI Chat Component */}
          <AIProjectChat project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;

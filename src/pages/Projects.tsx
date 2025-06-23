import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import * as Dialog from '@radix-ui/react-dialog';
import { Github, ExternalLink, Bot, Linkedin, Phone, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import AIProjectChat from '@/components/AIProjectChat';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Web Development', 'Mobile', 'Data Science', 'Scripting', 'University'];

  const projects = [
    {
      id: 8,
      title: "LeadScout Pro",
      description: "Self-hosted lead generation and outreach automation platform. Scrape leads, manage databases, launch AI-powered campaigns, and track analytics—all in one place.",
      category: "Data Science",
      technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite", "Recharts", "React Router", "Lucide React"],
      image: "/leadscout.PNG",
      githubUrl: "https://github.com/makanakabailey/leadscout-pro",
      liveUrl: "https://leadscout-roan.vercel.app/",
      problemSolution: "Businesses need a unified platform to automate lead generation, manage outreach, and analyze campaign performance. LeadScout Pro streamlines scraping, database management, and AI-driven outreach for better conversions.",
      features: [
        "Multi-platform lead scraping (LinkedIn, Facebook, Instagram, etc.)",
        "Comprehensive lead database management",
        "AI-powered outreach campaign creation",
        "Automated email and WhatsApp messaging",
        "Performance analytics and conversion tracking",
        "Customizable AI model integration (Gemini, DeepSeek, OpenAI)",
        "Bulk import/export and lead scoring",
        "Responsive dashboard and navigation"
      ],
      challenges: [
        "Integrating multiple social media APIs for scraping",
        "Building a flexible, scalable lead database",
        "Designing a user-friendly, analytics-rich dashboard",
        "Ensuring secure, reliable automation for outreach"
      ],
      learnings: "This project deepened my expertise in full-stack data science apps, API integration, and building scalable, analytics-driven dashboards with React and TypeScript.",
      futureImprovements: [
        "Add more AI models and prompt customization",
        "Integrate additional outreach channels",
        "Enhance analytics with predictive insights",
        "Add team collaboration features"
      ]
    },
    {
      id: 7,
      title: "AI Resume Builder",
      description: "Create professional resumes, cover letters, and check ATS scores with AI-powered precision. Modern, user-friendly, and fully responsive.",
      category: "Web Development",
      technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite", "React PDF"],
      image: "/AI Resume Builder.PNG",
      githubUrl: "https://github.com/makanakabailey/resume-builder",
      liveUrl: "https://resumebuilder-inky.vercel.app/",
      problemSolution: "Job seekers need a fast, easy way to create professional resumes and cover letters that pass ATS checks. This app provides an all-in-one solution with real-time preview, templates, and export to PDF.",
      features: [
        "AI-guided step-by-step resume creation",
        "Multiple professional resume templates",
        "Real-time preview of your resume",
        "Save and load progress",
        "Export to PDF",
        "Cover letter generator",
        "ATS score checker",
        "Fully responsive design",
        "Accessible and modern UI"
      ],
      challenges: [
        "Implementing real-time PDF preview and export",
        "Designing a clean, intuitive, and accessible UI",
        "Ensuring ATS compatibility for generated resumes",
        "Managing state for complex forms and templates"
      ],
      learnings: "This project enhanced my skills in React, TypeScript, and advanced UI/UX design. I learned about PDF generation, accessibility, and building production-ready SaaS tools.",
      futureImprovements: [
        "Add more AI-powered writing suggestions",
        "Integrate more export formats (Word, HTML)",
        "Add user accounts and cloud save",
        "Expand template and design options"
      ]
    },
    {
      id: 6,
      title: "FutureTask",
      description: "A futuristic task management app with offline support, animated UI, and cloud backup. Built for productivity and a modern user experience.",
      category: "Mobile",
      technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lucide React", "React Router", "Vite"],
      image: "/future-task-cover.PNG",
      githubUrl: "https://github.com/makanakabailey/future-task",
      liveUrl: "https://future-task-gray.vercel.app/",
      problemSolution: "Managing tasks efficiently is crucial for productivity. FutureTask provides a modern, animated, and offline-capable solution with advanced features like categories, priorities, and cloud backup.",
      features: [
        "Create, edit, delete, and toggle tasks",
        "Task categories with color coding",
        "Priority levels (low, medium, high)",
        "Due dates with overdue detection",
        "Task descriptions and completion tracking",
        "Local storage for offline use",
        "Responsive, animated UI with glass morphism and neon effects",
        "Statistics dashboard (total, pending, overdue tasks)",
        "Real-time search and filtering",
        "Export/import data as JSON",
        "Cloud backup (planned)"
      ],
      challenges: [
        "Implementing offline support and local storage",
        "Designing a modern, animated UI with glass morphism and neon effects",
        "Building a flexible statistics dashboard",
        "Ensuring smooth user experience across devices"
      ],
      learnings: "This project strengthened my skills in React, TypeScript, and advanced UI design. I learned about offline-first architecture, local storage, and building animated, responsive interfaces.",
      futureImprovements: [
        "Add cloud backup and sync",
        "Integrate push notifications",
        "Expand analytics and statistics",
        "Add collaboration features for teams"
      ]
    },
    {
      id: 5,
      title: "2pal Saloon",
      description: "A modern salon management system for appointment scheduling, client management, invoicing, analytics, and more.",
      category: "Web Development",
      technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite", "React Router"],
      image: "/2pal-saloon-cover.PNG",
      githubUrl: "https://github.com/makanakabailey/2pal-saloon",
      liveUrl: "https://2pal-saloon.vercel.app/",
      problemSolution: "Salons often struggle with manual operations and fragmented tools. 2pal Saloon streamlines appointment scheduling, client management, invoicing, and analytics in one beautiful, intuitive platform.",
      features: [
        "Intuitive appointment scheduling and management",
        "Client database with detailed profiles and history",
        "Invoicing and payment processing",
        "Analytics and business insights",
        "Responsive design for all devices",
        "Secure authentication and role-based access control",
        "Inventory management for salon products"
      ],
      challenges: [
        "Designing a seamless user experience for both staff and clients",
        "Implementing secure authentication and role-based access",
        "Ensuring responsive design across all devices",
        "Integrating analytics and business insights features"
      ],
      learnings: "This project deepened my expertise in building scalable, user-friendly web applications with modern React, TypeScript, and Tailwind CSS. I also learned about designing for real-world business needs and accessibility.",
      futureImprovements: [
        "Add SMS/email notifications for appointments",
        "Integrate payment gateways for online payments",
        "Expand analytics dashboard with more business insights",
        "Add multi-location support for salon chains"
      ]
    },
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and inventory management.",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://demo-ecommerce.com",
      problemSolution: "Many small businesses struggle with expensive e-commerce solutions. This platform provides an affordable, customizable alternative with all essential features.",
      features: [
        "User registration and authentication",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Admin dashboard for inventory management",
        "Order tracking and history",
        "Responsive mobile design"
      ],
      challenges: [
        "The main challenge was implementing secure payment processing while maintaining a smooth user experience. I solved this by integrating Stripe's secure payment APIs and implementing proper error handling."
      ],
      learnings: "This project taught me the importance of security in web applications, especially when handling sensitive user data and payments. I also learned about state management in complex React applications.",
      futureImprovements: [
        "Implement advanced analytics dashboard",
        "Add multi-language support",
        "Integrate AI-powered product recommendations",
        "Add social login options"
      ]
    },
    {
      id: 2,
      title: "Task Management Mobile App",
      description: "A React Native mobile application for task management with offline capabilities and team collaboration features.",
      category: "Mobile",
      technologies: ["React Native", "Redux", "SQLite", "Firebase", "AsyncStorage"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      githubUrl: "https://github.com/yourusername/task-manager-app",
      liveUrl: null,
      problemSolution: "Traditional task management apps often require constant internet connectivity. This app works offline and syncs when connected, perfect for users with unreliable internet.",
      features: [
        "Create, edit, and delete tasks",
        "Offline functionality with local storage",
        "Team collaboration and task assignment",
        "Push notifications for deadlines",
        "Cross-platform compatibility (iOS & Android)",
        "Dark/Light theme toggle",
        "Data synchronization across devices"
      ],
      challenges: [
        "Implementing offline-first architecture was complex, requiring careful state management and conflict resolution when syncing data. I used Redux for state management and implemented a robust sync mechanism."
      ],
      learnings: "I learned about mobile app development best practices, offline data management, and cross-platform development challenges. The project also taught me about user experience design for mobile interfaces.",
      futureImprovements: [
        "Add voice commands for task creation",
        "Implement AI-powered task prioritization",
        "Add calendar integration",
        "Create widget for quick task addition"
      ]
    },
    {
      id: 3,
      title: "Machine Learning Stock Predictor",
      description: "A Python-based machine learning model that predicts stock prices using historical data and technical indicators.",
      category: "Data Science",
      technologies: ["Python", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "scikit-learn"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      githubUrl: "https://github.com/yourusername/stock-predictor",
      liveUrl: null,
      problemSolution: "Stock market prediction is notoriously difficult, but machine learning can identify patterns in historical data. This project explores various ML algorithms to predict short-term price movements.",
      features: [
        "Data collection from multiple financial APIs",
        "Feature engineering with technical indicators",
        "Multiple ML models (LSTM, Random Forest, SVM)",
        "Model comparison and performance metrics",
        "Visualization of predictions vs actual prices",
        "Backtesting framework",
        "Real-time prediction capabilities"
      ],
      challenges: [
        "The biggest challenge was dealing with the inherent unpredictability of financial markets and avoiding overfitting. I implemented cross-validation and ensemble methods to improve model robustness."
      ],
      learnings: "This project deepened my understanding of time series analysis, feature engineering, and the limitations of machine learning in financial predictions. I also learned about data preprocessing and model evaluation techniques.",
      futureImprovements: [
        "Incorporate sentiment analysis from news data",
        "Add more sophisticated deep learning architectures",
        "Implement real-time trading simulation",
        "Create a web interface for model interaction"
      ]
    },
    {
      id: 4,
      title: "University Course Management System",
      description: "A comprehensive web application for managing university courses, student enrollments, and academic records.",
      category: "University",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
      githubUrl: "https://github.com/yourusername/course-management",
      liveUrl: null,
      problemSolution: "Manual course management processes are time-consuming and error-prone. This system automates course registration, grade management, and academic reporting for educational institutions.",
      features: [
        "Student and faculty user management",
        "Course creation and enrollment system",
        "Grade recording and transcript generation",
        "Academic calendar management",
        "Email notifications for important events",
        "Role-based access control",
        "Report generation for administration"
      ],
      challenges: [
        "Designing a flexible database schema that could handle complex academic relationships was challenging. I used proper normalization and created efficient queries for data retrieval."
      ],
      learnings: "This project taught me about enterprise application development, database design, and the importance of user experience in administrative systems. I also learned about Spring Security for authentication.",
      futureImprovements: [
        "Add mobile app companion",
        "Implement advanced analytics for academic performance",
        "Add integration with external learning management systems",
        "Create automated scheduling algorithms"
      ]
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            My Portfolio: Projects
          </h1>
          <h3 className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my journey in software development and problem-solving.
          </h3>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="rounded-full transition-all duration-300 hover:scale-105"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in rounded-xl border-border/50 hover:border-primary/50"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-full">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="rounded-full">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <Dialog.Root onOpenChange={(open) => { if (!open) setSelectedProject(null); }}>
                  <Dialog.Trigger asChild>
                    <Button 
                      className="w-full rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      variant="outline"
                    >
                      View Details
                    </Button>
                  </Dialog.Trigger>
                  <Dialog.Content className="w-full h-full max-w-[90vw] max-h-[90vh] p-0 sm:p-8 overflow-y-auto">
                    <Dialog.Title>Project Details</Dialog.Title>
                    <Dialog.Description>
                      Detailed information about the selected project, including features, challenges, and links.
                    </Dialog.Description>
                    <ProjectDetailModal project={project} onClose={() => setSelectedProject(null)} />
                  </Dialog.Content>
                </Dialog.Root>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Icons */}
        <div className="flex gap-3 mt-4">
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
    </div>
  );
};

export default Projects;

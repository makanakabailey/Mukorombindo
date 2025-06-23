import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Bot,
  GraduationCap,
  Briefcase,
  Code,
  Award
} from 'lucide-react';

const CV = () => {
  const [aiSummary] = useState(
    "Expertise in Python, JavaScript, React, and AI automation. Expert prompt engineer with proven ability to build full-stack applications, AI automations with n8n, and solve complex problems using advanced AI tools. Seeking an attachment to contribute to innovative projects."
  );

  const skills = {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "Java", "C++"],
    "Web Technologies": ["React", "HTML5", "CSS3", "Node.js", "Express.js"],
    "AI & Automation": ["Prompt Engineering", "n8n Workflows", "Cursor AI", "AI Agents", "LLM Integration"],
    "Databases": ["PostgreSQL", "MongoDB", "SQLite"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Cursor", "Docker", "Linux"]
  };

  const projects = [
    {
      title: "AI-Powered Task Automation System",
      technologies: ["n8n", "Python", "APIs", "LLMs"],
      description: "Built intelligent automation workflows that streamline business processes using AI agents and natural language processing.",
      link: "/projects"
    },
    {
      title: "Full-Stack Web Application",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      description: "Developed a comprehensive web platform with user authentication, real-time features, and responsive design.",
      link: "/projects"
    },
    {
      title: "Prompt Engineering Framework",
      technologies: ["Python", "OpenAI API", "Cursor", "AI Tools"],
      description: "Created a systematic approach to prompt optimization and AI tool integration for enhanced development productivity.",
      link: "/projects"
    }
  ];

  const experience = [
    {
      title: "AI Automation Specialist",
      organization: "Freelance Projects",
      period: "2023 - Present",
      description: "Developed custom AI automation solutions using n8n and various AI tools. Specialized in prompt engineering and building intelligent agents for business process optimization."
    },
    {
      title: "Student Developer",
      organization: "Bindura University of Science Education",
      period: "2022 - Present",
      description: "Leading computer science projects, mentoring peers in AI tools and automation, and contributing to university tech initiatives."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header */}
      <header className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            My CV
          </h1>
          <h3 className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A summary of my skills, experience, and education.
          </h3>
        </div>
      </header>

      <div className="container mx-auto px-4 pb-16 max-w-4xl">
        
        {/* AI CV Highlights */}
        <Card className="mb-8 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-semibold text-lg">CV Highlights</h3>
                  <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
                    AI Generated
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {aiSummary}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+263 788 839 065</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>makanaka.mukorombindo@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Bindura, Zimbabwe</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-muted-foreground" />
                <a href="#" className="hover:text-primary transition-colors">LinkedIn Profile</a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-muted-foreground" />
                <a href="#" className="hover:text-primary transition-colors">GitHub Profile</a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="mb-8 animate-fade-in" style={{ animationDelay: '1.0s' }}>
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Passionate Computer Science student at Bindura University of Science Education with specialized expertise 
              in AI automation and prompt engineering. Proven ability to develop full-stack applications and build 
              intelligent automation solutions using cutting-edge AI tools like Cursor and n8n. Seeking an attachment 
              opportunity to apply my unique combination of traditional programming skills and AI automation expertise 
              to contribute meaningfully to innovative projects and real-world problem-solving.
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-8 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Bachelor of Science in Computer Science</h3>
                <p className="text-primary">Bindura University of Science Education</p>
                <p className="text-muted-foreground">Expected Graduation: 2025</p>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Software Engineering, 
                  Database Management Systems, Web Development, Artificial Intelligence, Machine Learning
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8 animate-fade-in" style={{ animationDelay: '1.4s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="font-semibold mb-3 text-primary">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:scale-105 transition-transform">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Projects */}
        <Card className="mb-8 animate-fade-in" style={{ animationDelay: '1.6s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Key Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{project.title}</h4>
                      <div className="flex flex-wrap gap-2 my-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm">{project.description}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-4">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-8 animate-fade-in" style={{ animationDelay: '1.8s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-4">
                  <h4 className="font-semibold text-lg">{exp.title}</h4>
                  <p className="text-primary">{exp.organization}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <p className="text-muted-foreground mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Add download buttons for the two PDFs */}
        <div className="flex gap-4 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="/MakanakaMukorombindoResume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition">
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <a href="/attachment letter Makanaka Mukorombindo.pdf" download className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded hover:bg-secondary/80 transition">
            <Download className="h-4 w-4" /> Download Attachment Letter
          </a>
        </div>

      </div>

      {/* Add download buttons for the two PDFs at the bottom */}
      <div className="flex gap-4 justify-center mt-8 animate-fade-in" style={{ animationDelay: '2.0s' }}>
        <a href="/MakanakaMukorombindoResume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition">
          <Download className="h-4 w-4" /> Download Resume
        </a>
        <a href="/attachment letter Makanaka Mukorombindo.pdf" download className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded hover:bg-secondary/80 transition">
          <Download className="h-4 w-4" /> Download Attachment Letter
        </a>
      </div>

    </div>
  );
};

export default CV;

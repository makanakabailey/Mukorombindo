
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Globe, 
  Settings, 
  Bot, 
  Users, 
  Target, 
  Lightbulb,
  Send,
  Cloud
} from 'lucide-react';

const Skills = () => {
  const [visibleBars, setVisibleBars] = useState<Set<string>>(new Set());
  const [aiInput, setAiInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  // Trigger animations on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const allSkills = [
        ...programmingLanguages.map(s => s.name),
        ...webTechnologies.map(s => s.name),
        ...aiAutomation.map(s => s.name),
        ...databases.map(s => s.name),
        ...cloudServices.map(s => s.name)
      ];
      setVisibleBars(new Set(allSkills));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const programmingLanguages = [
    { name: "Python", level: 90, icon: "🐍", description: "Backend APIs, AI automation, data processing" },
    { name: "JavaScript", level: 85, icon: "🟨", description: "Frontend development, Node.js applications" },
    { name: "TypeScript", level: 80, icon: "🔷", description: "Type-safe application development" },
    { name: "Java", level: 75, icon: "☕", description: "Object-oriented programming, enterprise applications" },
    { name: "C++", level: 70, icon: "⚡", description: "System programming, performance optimization" }
  ];

  const webTechnologies = [
    { name: "React", level: 85, icon: "⚛️", description: "Component-based UI development" },
    { name: "Node.js", level: 80, icon: "🟢", description: "Server-side JavaScript development" },
    { name: "HTML5/CSS3", level: 90, icon: "🌐", description: "Semantic markup and modern styling" },
    { name: "Express.js", level: 75, icon: "🚂", description: "RESTful API development" },
    { name: "Next.js", level: 70, icon: "▲", description: "Full-stack React framework" }
  ];

  const aiAutomation = [
    { name: "Prompt Engineering", level: 95, icon: "🤖", description: "Expert-level AI tool optimization" },
    { name: "Cursor AI", level: 90, icon: "⚡", description: "AI-powered development workflows" },
    { name: "n8n Workflows", level: 88, icon: "🔄", description: "Intelligent automation and agent building" },
    { name: "LLM Integration", level: 85, icon: "🧠", description: "API integration with language models" },
    { name: "AI Agents", level: 82, icon: "🎯", description: "Autonomous task automation systems" }
  ];

  const databases = [
    { name: "PostgreSQL", level: 80, icon: "🐘", description: "Relational database design and optimization" },
    { name: "MongoDB", level: 75, icon: "🍃", description: "NoSQL document-based data management" },
    { name: "SQLite", level: 85, icon: "💾", description: "Lightweight embedded database solutions" },
    { name: "Redis", level: 70, icon: "🔴", description: "In-memory caching and session storage" }
  ];

  const cloudServices = [
    { name: "AWS", level: 65, icon: "☁️", description: "Cloud infrastructure and services" },
    { name: "Docker", level: 70, icon: "🐳", description: "Containerization and deployment" },
    { name: "Git/GitHub", level: 90, icon: "📚", description: "Version control and collaboration" },
    { name: "Linux", level: 75, icon: "🐧", description: "Server administration and bash scripting" }
  ];

  const softSkills = [
    "Problem Solving", "Critical Thinking", "Team Collaboration", "Communication", 
    "Adaptability", "Time Management", "Continuous Learning", "Leadership",
    "AI Tool Mastery", "Process Automation"
  ];

  const developmentTools = [
    { name: "VS Code", icon: "💻" },
    { name: "Cursor", icon: "⚡" },
    { name: "Git", icon: "📝" },
    { name: "GitHub", icon: "📚" },
    { name: "n8n", icon: "🔄" },
    { name: "Docker", icon: "🐳" },
    { name: "Postman", icon: "📬" },
    { name: "Figma", icon: "🎨" }
  ];

  const generateAIResponse = (input: string): string => {
    const query = input.toLowerCase();
    
    if (query.includes('prompt engineer') || query.includes('ai')) {
      return "Based on my analysis, Makanaka's expert-level prompt engineering skills (95% proficiency) combined with extensive experience in Cursor AI and n8n workflows makes them exceptionally qualified for AI-focused roles. Their unique combination of traditional programming and AI automation expertise is highly valuable in today's market.";
    }
    
    if (query.includes('full stack') || query.includes('web developer')) {
      return "Makanaka's strong proficiency in React (85%), Node.js (80%), and database management makes them well-suited for full-stack development roles. Their additional AI automation skills provide a competitive edge for building intelligent web applications.";
    }
    
    if (query.includes('python') || query.includes('backend')) {
      return "With 90% proficiency in Python and strong experience in backend development, API creation, and AI automation, Makanaka is an excellent candidate for Python developer roles. Their prompt engineering expertise adds significant value for AI-enhanced backend systems.";
    }
    
    if (query.includes('automation') || query.includes('n8n')) {
      return "Makanaka's 88% proficiency in n8n workflows combined with expert prompt engineering skills makes them ideal for process automation roles. They can build intelligent agents and streamline business processes using cutting-edge AI tools.";
    }
    
    if (query.includes('attachment') || query.includes('internship')) {
      return "Makanaka's diverse skill set spanning traditional programming, AI automation, and prompt engineering makes them valuable for various attachment opportunities. Their expertise in modern AI tools like Cursor and n8n provides immediate practical value to any development team.";
    }
    
    return "I can help assess alignment with common tech roles or specific technologies based on Makanaka's skills listed. Try asking about specific roles like 'AI Engineer', 'Full Stack Developer', 'Python Developer', or technologies like 'React', 'automation', etc.";
  };

  const handleAISubmit = () => {
    if (!aiInput.trim()) return;
    const response = generateAIResponse(aiInput);
    setAiResponse(response);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            My Skillset
          </h1>
          <h3 className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A comprehensive overview of my technical capabilities.
          </h3>
        </div>
      </header>

      <div className="container mx-auto px-4 pb-16 max-w-6xl">
        
        {/* Programming Languages */}
        <Card className="mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              Programming Languages
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {programmingLanguages.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: visibleBars.has(skill.name) ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
                <p className="text-xs text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* AI & Automation - Featured prominently */}
        <Card className="mb-8 animate-fade-in border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/10" style={{ animationDelay: '0.6s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              AI Automation & Prompt Engineering
              <Badge variant="secondary" className="ml-2">Expert Level</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {aiAutomation.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: visibleBars.has(skill.name) ? `${skill.level}%` : '0%',
                      transitionDelay: `${(index + 5) * 0.1}s`
                    }}
                  ></div>
                </div>
                <p className="text-xs text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Web Technologies */}
        <Card className="mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              Web Technologies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {webTechnologies.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: visibleBars.has(skill.name) ? `${skill.level}%` : '0%',
                      transitionDelay: `${(index + 10) * 0.1}s`
                    }}
                  ></div>
                </div>
                <p className="text-xs text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Databases & Cloud */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="animate-fade-in" style={{ animationDelay: '1.0s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-6 w-6 text-primary" />
                Databases
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {databases.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-1.5">
                    <div 
                      className="bg-primary h-1.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: visibleBars.has(skill.name) ? `${skill.level}%` : '0%',
                        transitionDelay: `${(index + 15) * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-6 w-6 text-primary" />
                Cloud & Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cloudServices.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-1.5">
                    <div 
                      className="bg-primary h-1.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: visibleBars.has(skill.name) ? `${skill.level}%` : '0%',
                        transitionDelay: `${(index + 19) * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Development Tools */}
        <Card className="mb-8 animate-fade-in" style={{ animationDelay: '1.4s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-6 w-6 text-primary" />
              Development Tools & Environment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {developmentTools.map((tool, index) => (
                <div 
                  key={tool.name}
                  className="flex flex-col items-center p-4 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-md animate-scale-in"
                  style={{ animationDelay: `${1.6 + index * 0.1}s` }}
                >
                  <span className="text-2xl mb-2">{tool.icon}</span>
                  <span className="text-sm font-medium text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Soft Skills */}
        <Card className="mb-8 animate-fade-in" style={{ animationDelay: '1.8s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Soft Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="hover:scale-105 transition-transform animate-scale-in"
                  style={{ animationDelay: `${2.0 + index * 0.05}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Skill Matcher */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/10 animate-fade-in" style={{ animationDelay: '2.2s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              AI Skill Matcher
              <Badge variant="secondary" className="ml-2">AI Powered</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Check if Makanaka's skills match your job role or technology requirements.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="e.g., 'Junior Python Developer', 'AI Engineer', 'React Developer'"
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAISubmit()}
                className="flex-1"
              />
              <Button onClick={handleAISubmit} disabled={!aiInput.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
            {aiResponse && (
              <div className="mt-4 p-4 bg-secondary/50 rounded-lg animate-fade-in">
                <div className="flex items-start gap-2">
                  <Bot className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm">{aiResponse}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default Skills;

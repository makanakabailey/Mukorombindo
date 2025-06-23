import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { 
  Code, 
  Bot, 
  Heart, 
  Mountain, 
  Music, 
  Camera,
  Lightbulb,
  Users,
  Target,
  Linkedin,
  Phone,
  Mail,
  Github
} from 'lucide-react';

const About = () => {
  const [aiInsight] = useState(
    "Based on Makanaka's self-description, core attributes include a strong problem-solving mindset, expertise in AI automation and prompt engineering, dedication to continuous learning, and a drive for innovative impact in software development. They appear highly motivated for practical application and collaboration."
  );

  const philosophyCards = [
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Problem-Solving",
      description: "I thrive on breaking down intricate problems into manageable pieces and crafting elegant, efficient solutions using both traditional programming and AI automation."
    },
    {
      icon: <Bot className="h-6 w-6 text-primary" />,
      title: "AI-Powered Innovation",
      description: "As an expert prompt engineer, I leverage AI tools like Cursor and n8n to build intelligent automations that solve real-world problems more efficiently."
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Impact & Innovation",
      description: "My goal is to develop software and AI solutions that not only solve problems but genuinely improve user experience and contribute positively to society."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Collaboration",
      description: "I enjoy working with diverse teams, valuing collective intelligence to achieve superior outcomes while sharing knowledge about AI automation."
    }
  ];

  const hobbies = [
    { icon: <Mountain className="h-5 w-5" />, name: "Hiking" },
    { icon: <Music className="h-5 w-5" />, name: "Music" },
    { icon: <Camera className="h-5 w-5" />, name: "Photography" },
    { icon: <Code className="h-5 w-5" />, name: "Open Source" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header */}
      <header className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            About Me
          </h1>
          <h3 className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            My journey, passions, and what drives me in Computer Science.
          </h3>
        </div>
      </header>

      <div className="container mx-auto px-4 pb-16 max-w-6xl">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-in">
            <div className="aspect-square w-80 mx-auto lg:mx-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
              <img
                src="/headshot.jpg"
                alt="Makanaka Mukorombindo"
                className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-primary/30"
              />
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h2 className="text-3xl font-bold mb-4">Hello! I'm Makanaka Mukorombindo</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                A passionate 22-year-old Computer Science student from Bindura University of Science Education in Zimbabwe. 
                My journey into programming began with curiosity about how technology shapes our world, and it has evolved 
                into a deep fascination with both traditional software development and cutting-edge AI automation.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                What sets me apart is my expertise in prompt engineering and AI automation. I'm proficient with advanced 
                AI tools like Cursor for development and specialize in building intelligent automations and agents using 
                n8n. This unique combination allows me to solve problems more efficiently and create innovative solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm particularly drawn to clean code architecture, building intuitive user experiences, and leveraging 
                AI to enhance productivity. Born on May 4th, 2003, I represent a generation that grew up with technology 
                and now aims to push its boundaries further.
              </p>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <Card className="mb-12 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-semibold text-lg">AI Personality Analysis</h3>
                  <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
                    AI Generated
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {aiInsight}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            My Approach to Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophyCards.map((card, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                      <p className="text-muted-foreground">{card.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <Card className="mb-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <CardContent className="p-6">
            <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Beyond the Code
            </h3>
            <p className="text-muted-foreground mb-4">
              When I'm not developing software or building AI automations, I enjoy exploring the beautiful landscapes 
              of Zimbabwe through hiking, discovering new music genres, capturing moments through photography, and 
              contributing to open-source projects.
            </p>
            <div className="flex flex-wrap gap-3">
              {hobbies.map((hobby, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-secondary/50 px-3 py-2 rounded-full hover:scale-105 transition-transform cursor-default"
                >
                  {hobby.icon}
                  <span className="text-sm">{hobby.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '1.4s' }}>
          <h2 className="text-2xl font-bold mb-4">Ready to Connect?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, share insights about AI automation, 
            or collaborate on innovative projects. Let's build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="rounded-full hover:scale-105 transition-transform"
              onClick={() => window.location.href = '/contact'}
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="rounded-full hover:scale-105 transition-transform"
              onClick={() => window.location.href = '/projects'}
            >
              View My Work
            </Button>
          </div>
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

export default About;

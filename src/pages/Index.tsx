import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { Github, Linkedin, Mail, Code, Database, Lightbulb, MessageCircle, Phone, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [showQuickContact, setShowQuickContact] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Building the Future, Line by Line";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const expertiseCards = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Software Development",
      description: "Crafting efficient and scalable solutions."
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "AI Automation & Prompt Engineering", 
      description: "Expert in AI tools like Cursor and building automations with n8n."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Problem Solving",
      description: "Analytical approach to complex challenges."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Makanaka Mukorombindo</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-2 h-8">
              {typedText}
              <span className="animate-pulse">|</span>
            </div>
            <h2 className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Computer Science Student & AI Automation Expert, Seeking an Attachment.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/projects">
                <Button 
                  size="lg" 
                  className="rounded-full hover:scale-105 transition-transform"
                >
                  View My Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="rounded-full hover:scale-105 transition-transform"
                >
                  Let's Connect
                </Button>
              </Link>
            </div>

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
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My Core Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {expertiseCards.map((card, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-in border-border/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <Button
            size="lg"
            className="rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse"
            onClick={() => setShowQuickContact(!showQuickContact)}
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
          
          {showQuickContact && (
            <div className="absolute bottom-16 right-0 bg-background border border-border rounded-lg p-4 shadow-xl animate-scale-in min-w-[200px]">
              <div className="space-y-3">
                <a 
                  href="https://wa.me/263788839065?text=Hello%20Makanaka,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect%20about%20potential%20opportunities."
                  className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="#"
                  className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="mailto:makanaka.mukorombindo@example.com"
                  className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </a>
                <a 
                  href="/contact"
                  className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Contact Page</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;

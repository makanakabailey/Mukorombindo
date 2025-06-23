import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bot, Send, Linkedin, Phone, Mail, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  problemSolution: string;
  features: string[];
  challenges: string;
  learnings: string;
}

interface AIProjectChatProps {
  project: Project;
}

interface ChatMessage {
  id: number;
  message: string;
  isUser: boolean;
  timestamp: Date;
}

const AIProjectChat: React.FC<AIProjectChatProps> = ({ project }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const generateAIResponse = (userQuestion: string): string => {
    const question = userQuestion.toLowerCase();
    
    // Simple pattern matching for common questions
    if (question.includes('tech stack') || question.includes('technologies') || question.includes('built with')) {
      return `This project was built using ${project.technologies.join(', ')}. The technology stack was chosen for its scalability, performance, and developer experience.`;
    }
    
    if (question.includes('challenge') || question.includes('difficult') || question.includes('problem')) {
      return project.challenges;
    }
    
    if (question.includes('feature') || question.includes('functionality') || question.includes('what does it do')) {
      return `The main features include: ${project.features.slice(0, 3).join(', ')}, and several other capabilities. Each feature was designed with user experience and performance in mind.`;
    }
    
    if (question.includes('learn') || question.includes('skill') || question.includes('experience')) {
      return project.learnings;
    }
    
    if (question.includes('purpose') || question.includes('why') || question.includes('goal')) {
      return project.problemSolution;
    }
    
    if (question.includes('code') || question.includes('github') || question.includes('repository')) {
      return `You can explore the complete source code on GitHub. The codebase follows best practices with clean architecture, comprehensive documentation, and includes unit tests for key functionality.`;
    }
    
    if (question.includes('future') || question.includes('next') || question.includes('improve')) {
      return `I have several exciting improvements planned for this project, including enhanced features, performance optimizations, and new technologies integration. The roadmap focuses on user feedback and emerging tech trends.`;
    }
    
    // Default response
    return `That's a great question about ${project.title}! This project demonstrates my expertise in ${project.category.toLowerCase()} and showcases practical problem-solving skills. Feel free to ask about specific technologies, challenges, or features you'd like to know more about.`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      message: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: Date.now() + 1,
        message: generateAIResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Card className="rounded-lg border bg-card text-card-foreground shadow-sm border-primary/20 bg-gradient-to-br from-background to-secondary/10">
      <CardHeader className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 text-primary">
          <Bot className="h-6 w-6" />
          Ask the AI About This Project
          <span className="text-xs text-muted-foreground ml-2 bg-primary/10 px-2 py-1 rounded-full">AI Powered</span>
        </h3>
        <p className="text-sm text-muted-foreground">
          Get detailed insights about the technologies, challenges, and design decisions behind this project.
        </p>
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
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Chat Messages */}
        {messages.length > 0 && (
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg animate-scale-in ${
                    msg.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  <p className="text-sm">{msg.message}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Input Area */}
        <div className="flex gap-2">
          <Input
            placeholder="Ask about technologies, challenges, features..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 rounded-full"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="rounded-full hover:scale-105 transition-transform"
            aria-label="Send"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        {messages.length === 0 && (
          <div className="text-center py-4">
            <p className="text-sm text-muted-foreground mb-3">
              Try asking questions like:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "What's the tech stack?",
                "What challenges did you face?",
                "What are the main features?",
                "What did you learn?"
              ].map((suggestion) => (
                <Button
                  key={suggestion}
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs"
                  onClick={() => setInputValue(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIProjectChat;

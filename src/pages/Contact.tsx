import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import { 
  Bot, 
  Send, 
  MessageCircle, 
  Linkedin, 
  Mail, 
  Github, 
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface ChatMessage {
  id: number;
  message: string;
  isUser: boolean;
  timestamp: Date;
}

const Contact = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize AI assistant with greeting
  useEffect(() => {
    const initialMessage: ChatMessage = {
      id: 1,
      message: "Hello! I'm Makanaka's AI Connection Assistant. How can I help you learn more about their work or connect with them?",
      isUser: false,
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
  }, []);

  const generateAIResponse = (userQuestion: string): string => {
    const question = userQuestion.toLowerCase();
    
    if (question.includes('attachment') || question.includes('internship') || question.includes('opportunity')) {
      return "For specific attachment inquiries, I'd recommend using the contact form below or connecting directly on LinkedIn. Makanaka is actively seeking attachment opportunities and would love to discuss how they can contribute to your team with their expertise in software development and AI automation!";
    }
    
    if (question.includes('project') || question.includes('work') || question.includes('portfolio')) {
      return "You can view all of Makanaka's detailed projects on the Projects page! Would you like me to direct you there? They showcase full-stack applications, AI automation projects, and clean code architecture.";
    }
    
    if (question.includes('ai') || question.includes('prompt') || question.includes('automation') || question.includes('cursor') || question.includes('n8n')) {
      return "Makanaka is an expert prompt engineer with extensive experience using AI tools like Cursor for development and building AI automations and agents with n8n. They're passionate about leveraging AI to solve complex problems efficiently!";
    }
    
    if (question.includes('contact') || question.includes('reach') || question.includes('connect')) {
      return "You can contact Makanaka directly through several channels: use the form below, connect on LinkedIn for professional inquiries, send a WhatsApp message for quick questions, or email directly. Choose what works best for you!";
    }
    
    if (question.includes('skill') || question.includes('technology') || question.includes('experience')) {
      return "Makanaka has strong expertise in Python, JavaScript, React, AI automation, and prompt engineering. You can see a detailed breakdown with proficiency levels on the Skills page. They're always learning new technologies and AI tools!";
    }
    
    if (question.includes('location') || question.includes('where') || question.includes('zimbabwe') || question.includes('bindura')) {
      return "Makanaka is currently studying at Bindura University of Science Education in Zimbabwe and is actively seeking attachment opportunities. They're open to both local and remote opportunities with the right company.";
    }
    
    if (question.includes('hello') || question.includes('hi') || question.includes('hey')) {
      return "Hello! Great to meet you! I'm here to help you learn more about Makanaka or connect with them. What would you like to know? You can ask about their projects, AI expertise, skills, or how to get in touch!";
    }
    
    // Default response
    return "I'm designed to help with common inquiries about Makanaka's work and background. For unique questions or detailed discussions, please use the contact form below or reach out directly through the provided links!";
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

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    handleSendMessage();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    // Simulate form submission
    setFormStatus('success');
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormStatus('idle');
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formStatus !== 'idle') setFormStatus('idle');
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      name: "WhatsApp",
      description: "Quick messages",
      href: "https://wa.me/263788839065?text=Hello%20Makanaka,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect%20about%20potential%20opportunities.",
      color: "hover:bg-green-500"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      description: "Professional network",
      href: "https://www.linkedin.com/in/makanaka-mukorombindo-930629312",
      color: "hover:bg-blue-500"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      name: "Email",
      description: "Direct contact",
      href: "mailto:mkanakabailey@gmail.com",
      color: "hover:bg-red-500"
    },
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      description: "View code",
      href: "https://github.com/makanakabailey",
      color: "hover:bg-gray-500"
    }
  ];

  const quickQuestions = [
    "Tell me about attachment opportunities",
    "What kind of AI automations does Makanaka build?",
    "How can I contact Makanaka directly?",
    "What are Makanaka's main skills?"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header */}
      <header className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Let's Connect
          </h1>
          <h3 className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I'm excited to discuss attachment opportunities or collaborate on projects.
          </h3>
        </div>
      </header>

      <div className="container mx-auto px-4 pb-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* AI Connection Assistant */}
          <div className="space-y-6">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Bot className="h-6 w-6" />
                  AI Connection Assistant
                  <span className="text-xs text-muted-foreground ml-2 bg-primary/10 px-2 py-1 rounded-full">
                    AI Powered
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Chat Messages */}
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] p-3 rounded-lg animate-scale-in ${
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

                {/* Input Area */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask me anything about Makanaka..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="hover:scale-105 transition-transform"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quick Questions */}
                {messages.length <= 1 && (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Try asking:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickQuestions.map((question) => (
                        <Button
                          key={question}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                          onClick={() => handleQuickQuestion(question)}
                        >
                          {question}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Direct Contact Links */}
            <Card>
              <CardHeader>
                <CardTitle>Direct Contact Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {contactMethods.map((method) => (
                    <a
                      key={method.name}
                      href={method.href}
                      className={`p-4 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-md ${method.color} hover:text-white group`}
                      {...(method.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <div className="flex flex-col items-center text-center space-y-2">
                        <div className="p-2 bg-secondary/50 rounded-full group-hover:bg-white/20 transition-colors">
                          {method.icon}
                        </div>
                        <div>
                          <p className="font-medium">{method.name}</p>
                          <p className="text-xs text-muted-foreground group-hover:text-white/80">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <Input
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                  />
                  <Textarea
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                  />
                  
                  {formStatus === 'success' && (
                    <div className="flex items-center gap-2 text-green-600 text-sm">
                      <CheckCircle className="h-4 w-4" />
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  
                  {formStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      Please fill in all required fields.
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full hover:scale-105 transition-transform"
                    disabled={formStatus === 'success'}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Location & Availability */}
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Current Location & Availability</h3>
                    <p className="text-muted-foreground">
                      Currently studying at <span className="text-primary font-medium">Bindura University of Science Education, Zimbabwe</span> and actively seeking attachment opportunities. Open to both local and remote positions with the right company.
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-muted-foreground">Available for immediate start</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Add this in a visible section (e.g., header/footer/contact area) */}
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
  );
};

export default Contact;

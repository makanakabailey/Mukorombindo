import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield, Linkedin, Phone, Mail, Github } from 'lucide-react';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  // Check if admin is already logged in
  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    if (isLoggedIn) {
      setShowAdminPanel(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleAdminClick = () => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    if (isLoggedIn) {
      setShowAdminPanel(true);
    } else {
      setShowAdminLogin(true);
    }
  };

  const handleAdminLogin = (success: boolean) => {
    setShowAdminLogin(false);
    if (success) {
      setShowAdminPanel(true);
    }
  };

  const handleAdminClose = () => {
    setShowAdminPanel(false);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/cv', label: 'CV' },
    { href: '/skills', label: 'Skills' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MM</span>
            </div>
            <span className="font-semibold text-lg">Makanaka Mukorombindo</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleAdminClick}
              className="rounded-full"
              title="Admin Panel"
            >
              <Shield className="h-4 w-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Additional Links */}
          <div className="flex gap-3 ml-auto">
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

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <AdminLogin 
          onLogin={handleAdminLogin} 
          onClose={() => setShowAdminLogin(false)} 
        />
      )}

      {/* Admin Panel */}
      {showAdminPanel && (
        <AdminPanel onClose={handleAdminClose} />
      )}
    </>
  );
};

export default Navigation;

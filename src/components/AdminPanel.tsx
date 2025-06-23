import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Save, 
  LogOut,
  Code,
  Briefcase,
  Award,
  Linkedin,
  Github
} from 'lucide-react';

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel = ({ onClose }: AdminPanelProps) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Makanaka Mukorombindo',
    age: '22',
    email: 'makanaka.mukorombindo@example.com',
    phone: '+263 788 839 065',
    location: 'Harare, Zimbabwe',
    university: 'Bindura University of Science Education',
    tagline: 'Building the Future, Line by Line',
    bio: 'Computer Science Student & AI Automation Expert, Seeking an Attachment.'
  });

  const [skills, setSkills] = useState([
    'JavaScript/TypeScript', 'React', 'Python', 'AI Automation', 'Prompt Engineering'
  ]);

  const [projects, setProjects] = useState([
    { name: 'Project 1', description: 'Description here', tech: 'React, TypeScript' },
    { name: 'Project 2', description: 'Description here', tech: 'Python, AI' }
  ]);

  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleSave = (section: string) => {
    if (section === 'Personal Information') {
      const newErrors: { name?: string; email?: string } = {};
      if (!personalInfo.name.trim()) newErrors.name = 'Name is required';
      if (!personalInfo.email.trim()) newErrors.email = 'Email is required';
      setErrors(newErrors);
      if (Object.keys(newErrors).length > 0) {
        setNotification({ message: Object.values(newErrors).join(' | '), type: 'error' });
        setTimeout(() => setNotification(null), 3000);
        return;
      }
    }
    setErrors({});
    // Here you would typically save to a database
    // For now, we'll just show a success message
    console.log(`Saved ${section}:`, { personalInfo, skills, projects });
    setNotification({ message: `${section} saved successfully!`, type: 'success' });
    // Clear notification after 3 seconds
    setTimeout(() => setNotification(null), 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        {/* Notification */}
        {notification && (
          <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
            notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`}>
            {notification.message}
          </div>
        )}

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Settings className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Admin Panel</h1>
              <p className="text-muted-foreground">Manage your portfolio content</p>
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
          </div>
          <Button onClick={handleLogout} variant="outline" className="gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal" className="gap-2">
              <User className="h-4 w-4" />
              Personal
            </TabsTrigger>
            <TabsTrigger value="skills" className="gap-2">
              <Code className="h-4 w-4" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="projects" className="gap-2">
              <Briefcase className="h-4 w-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="experience" className="gap-2">
              <Award className="h-4 w-4" />
              Experience
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={personalInfo.name}
                      onChange={(e) => setPersonalInfo(prev => ({ ...prev, name: e.target.value }))}
                    />
                    {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      value={personalInfo.age}
                      onChange={(e) => setPersonalInfo(prev => ({ ...prev, age: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={personalInfo.email}
                      onChange={(e) => setPersonalInfo(prev => ({ ...prev, email: e.target.value }))}
                    />
                    {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={personalInfo.phone}
                      onChange={(e) => setPersonalInfo(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={personalInfo.location}
                      onChange={(e) => setPersonalInfo(prev => ({ ...prev, location: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university">University</Label>
                    <Input
                      id="university"
                      value={personalInfo.university}
                      onChange={(e) => setPersonalInfo(prev => ({ ...prev, university: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input
                    id="tagline"
                    value={personalInfo.tagline}
                    onChange={(e) => setPersonalInfo(prev => ({ ...prev, tagline: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={personalInfo.bio}
                    onChange={(e) => setPersonalInfo(prev => ({ ...prev, bio: e.target.value }))}
                    rows={3}
                  />
                </div>
                <Button onClick={() => handleSave('Personal Information')} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Skills & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={skill}
                      onChange={(e) => {
                        const newSkills = [...skills];
                        newSkills[index] = e.target.value;
                        setSkills(newSkills);
                      }}
                      placeholder="Skill name"
                    />
                    <Button
                      variant="outline"
                      onClick={() => setSkills(skills.filter((_, i) => i !== index))}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  onClick={() => setSkills([...skills, ''])}
                  className="w-full"
                >
                  Add Skill
                </Button>
                <Button onClick={() => handleSave('Skills')} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <Input
                      value={project.name}
                      onChange={(e) => {
                        const newProjects = [...projects];
                        newProjects[index].name = e.target.value;
                        setProjects(newProjects);
                      }}
                      placeholder="Project name"
                    />
                    <Textarea
                      value={project.description}
                      onChange={(e) => {
                        const newProjects = [...projects];
                        newProjects[index].description = e.target.value;
                        setProjects(newProjects);
                      }}
                      placeholder="Project description"
                      rows={2}
                    />
                    <Input
                      value={project.tech}
                      onChange={(e) => {
                        const newProjects = [...projects];
                        newProjects[index].tech = e.target.value;
                        setProjects(newProjects);
                      }}
                      placeholder="Technologies used"
                    />
                    <Button
                      variant="outline"
                      onClick={() => setProjects(projects.filter((_, i) => i !== index))}
                    >
                      Remove Project
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  onClick={() => setProjects([...projects, { name: '', description: '', tech: '' }])}
                  className="w-full"
                >
                  Add Project
                </Button>
                <Button onClick={() => handleSave('Projects')} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Experience & Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Experience management coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;

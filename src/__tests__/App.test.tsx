import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

// Mock the components that are not needed for App testing
vi.mock('../components/Navigation', () => ({
  default: () => <div data-testid="mock-navigation">Navigation</div>
}));

vi.mock('../components/AdminLogin', () => ({
  default: () => <div data-testid="mock-admin-login">Admin Login</div>
}));

vi.mock('../components/AdminPanel', () => ({
  default: () => <div data-testid="mock-admin-panel">Admin Panel</div>
}));

const renderApp = () => {
  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

describe('App Component', () => {
  it('renders navigation component', () => {
    renderApp();
    expect(screen.getByTestId('mock-navigation')).toBeInTheDocument();
  });

  it('renders home page by default', () => {
    renderApp();
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });

  it('renders projects page when navigating to /projects', () => {
    renderApp();
    const projectsLink = screen.getByText(/projects/i);
    fireEvent.click(projectsLink);
    expect(screen.getByText(/my projects/i)).toBeInTheDocument();
  });

  it('renders CV page when navigating to /cv', () => {
    renderApp();
    const cvLink = screen.getByText(/cv/i);
    fireEvent.click(cvLink);
    expect(screen.getByText(/resume/i)).toBeInTheDocument();
  });

  it('renders skills page when navigating to /skills', () => {
    renderApp();
    const skillsLink = screen.getByText(/skills/i);
    fireEvent.click(skillsLink);
    expect(screen.getByText(/my skills/i)).toBeInTheDocument();
  });

  it('renders about page when navigating to /about', () => {
    renderApp();
    const aboutLink = screen.getByText(/about/i);
    fireEvent.click(aboutLink);
    expect(screen.getByText(/about me/i)).toBeInTheDocument();
  });

  it('renders contact page when navigating to /contact', () => {
    renderApp();
    const contactLink = screen.getByText(/contact/i);
    fireEvent.click(contactLink);
    expect(screen.getByText(/get in touch/i)).toBeInTheDocument();
  });

  it('renders admin login when navigating to /admin', () => {
    renderApp();
    const adminLink = screen.getByText(/admin/i);
    fireEvent.click(adminLink);
    expect(screen.getByTestId('mock-admin-login')).toBeInTheDocument();
  });

  it('renders 404 page for unknown routes', () => {
    renderApp();
    window.history.pushState({}, '', '/unknown-route');
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });

  it('maintains navigation state after page refresh', () => {
    renderApp();
    const projectsLink = screen.getByText(/projects/i);
    fireEvent.click(projectsLink);
    
    // Simulate page refresh
    window.history.pushState({}, '', '/projects');
    expect(screen.getByText(/my projects/i)).toBeInTheDocument();
  });
}); 
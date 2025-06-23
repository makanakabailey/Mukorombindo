import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../Navigation';

// Mock the theme context
vi.mock('../context/ThemeContext', () => ({
  useTheme: () => ({
    theme: 'light',
    toggleTheme: vi.fn(),
  }),
}));

const renderNavigation = () => {
  return render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
};

describe('Navigation Component', () => {
  it('renders all navigation links', () => {
    renderNavigation();
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('CV')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders theme toggle button', () => {
    renderNavigation();
    expect(screen.getByRole('button', { name: '☀️' })).toBeInTheDocument();
  });

  it('renders admin login link', () => {
    renderNavigation();
    expect(screen.getByRole('button', { name: 'Admin Panel' })).toBeInTheDocument();
  });

  it('shows mobile menu when hamburger is clicked', () => {
    renderNavigation();
    const hamburger = screen.getByRole('button', { name: '' });
    fireEvent.click(hamburger);
    // There are two navs: desktop and mobile. The mobile one is visible after click.
    const navs = screen.getAllByRole('navigation');
    // The mobile nav is the second one
    expect(navs[1]).toBeInTheDocument();
  });

  it('navigates to correct routes when links are clicked', () => {
    renderNavigation();
    
    const homeLink = screen.getByText('Home');
    const projectsLink = screen.getByText('Projects');
    
    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');
    
    fireEvent.click(projectsLink);
    expect(window.location.pathname).toBe('/projects');
  });
}); 
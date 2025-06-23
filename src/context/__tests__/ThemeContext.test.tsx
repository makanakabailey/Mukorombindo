import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../ThemeContext';

const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <div data-testid="theme">{theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const renderWithTheme = () => {
  return render(
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  );
};

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('provides default theme', () => {
    renderWithTheme();
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  });

  it('loads theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');
    renderWithTheme();
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
  });

  it('toggles theme when button is clicked', () => {
    renderWithTheme();
    const toggleButton = screen.getByRole('button', { name: /toggle theme/i });
    
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
    
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  });

  it('persists theme in localStorage', () => {
    renderWithTheme();
    const toggleButton = screen.getByRole('button', { name: /toggle theme/i });
    
    fireEvent.click(toggleButton);
    expect(localStorage.getItem('theme')).toBe('dark');
    
    fireEvent.click(toggleButton);
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('applies theme class to document', () => {
    renderWithTheme();
    const toggleButton = screen.getByRole('button', { name: /toggle theme/i });
    
    expect(document.documentElement).toHaveClass('light');
    
    fireEvent.click(toggleButton);
    expect(document.documentElement).toHaveClass('dark');
    
    fireEvent.click(toggleButton);
    expect(document.documentElement).toHaveClass('light');
  });

  it('handles invalid theme in localStorage', () => {
    localStorage.setItem('theme', 'invalid');
    renderWithTheme();
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  });
}); 
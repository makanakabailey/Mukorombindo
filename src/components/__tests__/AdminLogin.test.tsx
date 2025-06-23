import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AdminLogin from '../AdminLogin';

const mockOnLogin = vi.fn();
const mockOnClose = vi.fn();

const renderAdminLogin = () => {
  return render(
    <BrowserRouter>
      <AdminLogin onLogin={mockOnLogin} onClose={mockOnClose} />
    </BrowserRouter>
  );
};

describe('AdminLogin Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders login form with username and password fields', () => {
    renderAdminLogin();
    
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('shows error message with invalid credentials', async () => {
    renderAdminLogin();
    
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(usernameInput, { target: { value: 'wronguser' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpass' } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
      expect(mockOnLogin).toHaveBeenCalledWith(false);
    });
  });

  it('successfully logs in with correct credentials', async () => {
    renderAdminLogin();
    
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(usernameInput, { target: { value: 'makanaka' } });
    fireEvent.change(passwordInput, { target: { value: 'admin2024' } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(mockOnLogin).toHaveBeenCalledWith(true);
      expect(localStorage.getItem('isAdminLoggedIn')).toBe('true');
    });
  });

  it('validates required fields', async () => {
    renderAdminLogin();
    
    const loginButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.getByText(/username is required/i)).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });
  });

  it('calls onClose when cancel button is clicked', () => {
    renderAdminLogin();
    
    const cancelButton = screen.getByRole('button', { name: /cancel/i });
    fireEvent.click(cancelButton);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it('toggles password visibility', () => {
    renderAdminLogin();
    
    const passwordInput = screen.getByLabelText(/password/i);
    const toggleButton = screen.getByRole('button', { name: /toggle password/i });

    expect(passwordInput).toHaveAttribute('type', 'password');
    
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'text');
    
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });
}); 
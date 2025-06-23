import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AdminPanel from '../AdminPanel';

const mockOnClose = vi.fn();

const renderAdminPanel = () => {
  return render(
    <AdminPanel onClose={mockOnClose} />
  );
};

describe('AdminPanel Component', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('renders admin panel sections', () => {
    renderAdminPanel();
    
    expect(screen.getByText(/personal information/i)).toBeInTheDocument();
    expect(screen.getByText(/skills & technologies/i)).toBeInTheDocument();
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
  });

  it('allows editing personal information', async () => {
    renderAdminPanel();
    
    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const saveButton = screen.getByRole('button', { name: /save changes/i });

    fireEvent.change(nameInput, { target: { value: 'New Name' } });
    fireEvent.change(emailInput, { target: { value: 'new@email.com' } });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText(/personal information saved successfully/i)).toBeInTheDocument();
    });
  });

  it('allows managing skills', async () => {
    renderAdminPanel();
    
    // Switch to skills tab
    const skillsTab = screen.getByRole('tab', { name: /skills/i });
    fireEvent.click(skillsTab);

    // Add new skill
    const addSkillButton = screen.getByRole('button', { name: /add skill/i });
    fireEvent.click(addSkillButton);

    const skillInput = screen.getByPlaceholderText(/skill name/i);
    fireEvent.change(skillInput, { target: { value: 'New Skill' } });

    const saveButton = screen.getByRole('button', { name: /save changes/i });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText(/skills saved successfully/i)).toBeInTheDocument();
    });
  });

  it('allows managing projects', async () => {
    renderAdminPanel();
    
    // Switch to projects tab
    const projectsTab = screen.getByRole('tab', { name: /projects/i });
    fireEvent.click(projectsTab);

    // Target the first project input (since there are always initial projects)
    const projectNameInput = screen.getAllByPlaceholderText(/project name/i)[0];
    const projectDescInput = screen.getAllByPlaceholderText(/project description/i)[0];

    fireEvent.change(projectNameInput, { target: { value: 'New Project' } });
    fireEvent.change(projectDescInput, { target: { value: 'Project Description' } });

    const saveButton = screen.getByRole('button', { name: /save changes/i });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText(/projects saved successfully/i)).toBeInTheDocument();
    });
  });

  it('calls onClose when logout button is clicked', () => {
    renderAdminPanel();
    
    const logoutButton = screen.getByRole('button', { name: /logout/i });
    fireEvent.click(logoutButton);

    expect(mockOnClose).toHaveBeenCalled();
    expect(localStorage.getItem('isAdminLoggedIn')).toBeNull();
  });

  it('validates required fields in personal information', async () => {
    renderAdminPanel();
    
    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const saveButton = screen.getByRole('button', { name: /save changes/i });

    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.click(saveButton);

    await waitFor(() => {
      // There should be at least one error message for each field
      expect(screen.getAllByText(/name is required/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/email is required/i).length).toBeGreaterThan(0);
    });
  });

  it('allows removing skills', async () => {
    renderAdminPanel();
    
    // Switch to skills tab
    const skillsTab = screen.getByRole('tab', { name: /skills/i });
    fireEvent.click(skillsTab);

    // There should be at least one Remove button
    const removeButtons = screen.getAllByText('Remove');
    fireEvent.click(removeButtons[0]);

    const saveButton = screen.getByRole('button', { name: /save changes/i });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText(/skills saved successfully/i)).toBeInTheDocument();
    });
  });

  it('allows editing bio and tagline', async () => {
    renderAdminPanel();
    
    const taglineInput = screen.getByLabelText(/tagline/i);
    const bioInput = screen.getByLabelText(/bio/i);
    const saveButton = screen.getByRole('button', { name: /save changes/i });

    fireEvent.change(taglineInput, { target: { value: 'New Tagline' } });
    fireEvent.change(bioInput, { target: { value: 'New Bio' } });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText(/personal information saved successfully/i)).toBeInTheDocument();
    });
  });
}); 
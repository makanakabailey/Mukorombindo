import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectDetailModal from '../ProjectDetailModal';

const mockProject = {
  id: 1,
  title: 'Test Project',
  description: 'A test project description',
  category: 'Web Development',
  technologies: ['React', 'TypeScript'],
  image: '/test-image.jpg',
  githubUrl: 'https://github.com/test',
  liveUrl: 'https://test.com',
  problemSolution: 'Test problem and solution',
  features: ['Feature 1', 'Feature 2'],
  challenges: ['Challenge 1', 'Challenge 2'],
  learnings: 'Test learnings',
  futureImprovements: ['Improvement 1', 'Improvement 2']
};

const mockOnClose = vi.fn();

const renderProjectDetailModal = () => {
  return render(
    <ProjectDetailModal project={mockProject} onClose={mockOnClose} />
  );
};

describe('ProjectDetailModal Component', () => {
  it('renders project details correctly', () => {
    renderProjectDetailModal();
    
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();
    mockProject.technologies.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('displays project features', () => {
    renderProjectDetailModal();
    
    mockProject.features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('displays project challenges', () => {
    renderProjectDetailModal();
    
    mockProject.challenges.forEach(challenge => {
      expect(screen.getByText(challenge)).toBeInTheDocument();
    });
  });

  it('displays future improvements', () => {
    renderProjectDetailModal();
    
    mockProject.futureImprovements.forEach(improvement => {
      expect(screen.getByText(improvement)).toBeInTheDocument();
    });
  });

  it('renders project links', () => {
    renderProjectDetailModal();
    
    const githubLink = screen.getByRole('link', { name: /github/i });
    const liveLink = screen.getByRole('link', { name: /live demo/i });

    expect(githubLink).toHaveAttribute('href', mockProject.githubUrl);
    expect(liveLink).toHaveAttribute('href', mockProject.liveUrl);
  });

  it('calls onClose when close button is clicked', () => {
    renderProjectDetailModal();
    
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it('calls onClose when clicking outside the modal', () => {
    renderProjectDetailModal();
    
    const overlay = screen.getByTestId('modal-overlay');
    fireEvent.click(overlay);

    expect(mockOnClose).toHaveBeenCalled();
  });
}); 
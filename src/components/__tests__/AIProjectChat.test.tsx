import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AIProjectChat from '../AIProjectChat';

const mockProject = {
  id: 1,
  title: 'Test Project',
  description: 'A test project description',
  category: 'Web Development',
  technologies: ['React', 'TypeScript'],
  problemSolution: 'Test problem and solution',
  features: ['Feature 1', 'Feature 2'],
  challenges: 'Challenge 1: Integration, Challenge 2: Performance',
  learnings: 'Test learnings'
};

const mockOnClose = vi.fn();

const renderAIProjectChat = () => {
  return render(
    <AIProjectChat project={mockProject} />
  );
};

describe('AIProjectChat Component', () => {
  it('renders chat interface with project context', () => {
    renderAIProjectChat();
    
    expect(screen.getByText('Ask the AI About This Project')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/ask about technologies, challenges, features/i)).toBeInTheDocument();
  });

  it('displays initial system message', () => {
    renderAIProjectChat();
    
    expect(screen.getByText('Get detailed insights about the technologies, challenges, and design decisions behind this project.')).toBeInTheDocument();
  });

  it('allows sending messages', async () => {
    renderAIProjectChat();
    
    const input = screen.getByPlaceholderText(/ask about technologies, challenges, features/i);
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText('Test message')).toBeInTheDocument();
    });
  });

  it('clears input after sending message', async () => {
    renderAIProjectChat();
    
    const input = screen.getByPlaceholderText(/ask about technologies, challenges, features/i);
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(input).toHaveValue('');
    });
  });

  it('disables send button when input is empty', () => {
    renderAIProjectChat();
    
    const sendButton = screen.getByRole('button', { name: /send/i });
    expect(sendButton).toBeDisabled();
  });

  it('enables send button when input has content', () => {
    renderAIProjectChat();
    
    const input = screen.getByPlaceholderText(/ask about technologies, challenges, features/i);
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'Test message' } });
    expect(sendButton).not.toBeDisabled();
  });

  it('handles enter key to send message', async () => {
    renderAIProjectChat();
    
    const input = screen.getByPlaceholderText(/ask about technologies, challenges, features/i);

    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter' });

    await waitFor(() => {
      const messageElement = screen.getByText('Test message');
      expect(messageElement).toBeInTheDocument();
      const messageContainer = messageElement.closest('div');
      expect(messageContainer).toHaveClass('bg-primary');
    });
  });
}); 
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';

const createSectionRef = () => ({
  current: {
    home: { scrollIntoView: jest.fn() },
    about: { scrollIntoView: jest.fn() },
    projects: { scrollIntoView: jest.fn() },
    contact: { scrollIntoView: jest.fn() },
  },
});

describe('Navbar', () => {
  test('renders navigation links and toggle button', () => {
    render(<Navbar sectionRef={createSectionRef()} />);

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /jump to home section/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /jump to about section/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /jump to projects section/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /jump to contact section/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument();
  });
});

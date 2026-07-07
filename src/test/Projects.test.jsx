import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects';

describe('Projects', () => {
  test('renders project list and sample cards', () => {
    render(<Projects />);

    expect(screen.getByText(/Cloud Infrastructure Modernization/i)).toBeInTheDocument();
  });
});

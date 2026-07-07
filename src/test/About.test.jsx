import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('About', () => {
  test('renders about section content', () => {
    render(<About />);

    expect(screen.getByText(/About US/i)).toBeInTheDocument();
  });
});

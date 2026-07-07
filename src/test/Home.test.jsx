import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../components/Home';

describe('Home', () => {
  test('renders hero content and buttons', () => {
    render(<Home />);

    expect(screen.getByText('Welcome to Courtney Business')).toBeInTheDocument();
  });
});

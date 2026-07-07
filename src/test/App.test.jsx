import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders main app content and navigation', () => {
    render(<App />);

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  test('renders author name and contact details', () => {
    render(<Footer />);
    
    expect(screen.getByText(/admin@courtneybns.com/i)).toBeInTheDocument();
  });
});

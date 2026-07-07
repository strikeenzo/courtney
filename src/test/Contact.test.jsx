import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../components/Contact';

describe('Contact', () => {
  test('renders contact section and links', () => {
    render(<Contact />);

    expect(screen.getByText(/hello@jamesblack\.dev/i)).toBeInTheDocument();
  });

  test('send message button prevents default browser submission', () => {
    render(<Contact />);

    const sendButton = screen.getByRole('button', { name: /send message/i });
    const preventSpy = jest.spyOn(Event.prototype, 'preventDefault');

    fireEvent.click(sendButton);

    expect(preventSpy).toHaveBeenCalled();
    preventSpy.mockRestore();
  });
});

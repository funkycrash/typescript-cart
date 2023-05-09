import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a more fun footer', () => {
  render(<App />);
  const linkElement = screen.getByText(/navigating the code on/i);
  expect(linkElement).toBeInTheDocument();
});

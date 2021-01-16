import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world paragraph', () => {
  render(<App />);
  const pElement = screen.getByText(/hello world/i);
  expect(pElement).toBeInTheDocument();
});

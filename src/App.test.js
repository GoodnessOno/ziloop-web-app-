import { render, screen } from '@testing-library/react';
import { Home } from './pages';

test('renders "Possibility" in the header', () => {
  render(<Home />);
  const headerElement = screen.getByRole('heading', {name: /possibility/i });
  expect(headerElement).toBeInTheDocument();
});

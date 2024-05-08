import { render, screen, act } from '@testing-library/react';
import { Header } from './components';

test('renders "POWERING TOMORROW, SUSTAINABLY TODAY" in the header', async () => {
  await act(async () => {
    render(<Header />);
  });
  const headerElement = screen.getByText('POWERING TOMORROW, SUSTAINABLY TODAY');
  expect(headerElement).toBeInTheDocument();
});
  

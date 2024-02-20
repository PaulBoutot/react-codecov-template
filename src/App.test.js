import { render, screen } from '@testing-library/react';
import App from './App';
import { add, subtract } from './FooBar';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('adding two numbers works', () => {
  const n = add(1, 2);
  expect(n).toBe(3);
});

test('subtracting two numbers works', () => {
  const n = subtract(2, 1);
  expect(n).toBe(1);
});

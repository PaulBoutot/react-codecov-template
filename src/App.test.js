import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should not crash', () => {
    render(<App />);
  });

  it('should render the learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
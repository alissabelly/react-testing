import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './app';

describe('App', () => {
  it('should work as expected', () => {
    const { container } = render(<App />);

    const element = screen.getByText('React + Webpack5 + Jest');

    expect(element).toBeDefined();
  });
});

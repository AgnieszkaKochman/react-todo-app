import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('should render with title', () => {
  render(<App />);

  expect(screen.getByText('Vite + React')).toBeInTheDocument();
});

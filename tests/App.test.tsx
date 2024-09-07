import App from '@/App';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('should render correctly', () => {
    render(<App />);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent(/vite \+ react/i);
  });
});

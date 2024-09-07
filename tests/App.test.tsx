import App from '@/App';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe('App', () => {
  it('should render correctly', async () => {
    render(<App />);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent(/vite \+ react/i);

    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: /count is/i });
    expect(button).toHaveTextContent(/count is 0/i);
    await user.click(button);
    expect(button).toHaveTextContent(/count is 1/i);
    expect(
      screen.getByText('Click on the Vite and React logos to learn more')
    ).toBeInTheDocument();
  });
});

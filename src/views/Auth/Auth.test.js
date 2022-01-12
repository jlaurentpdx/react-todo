import { render, screen } from '@testing-library/react';
import Auth from './Auth';

test('Auth should display Header and AuthForm when user is not logged in', () => {
  const { container } = render(<Auth setCurrentUser={null} />);

  screen.getByText('Login');
  screen.getByText('Register');
  screen.getAllByDisplayValue('');
  screen.getByPlaceholderText('email@example.com');
  screen.getByPlaceholderText('password');
  screen.getByText('Submit');

  expect(container).toMatchSnapshot();
});

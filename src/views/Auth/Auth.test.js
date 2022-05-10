import { render, screen } from '@testing-library/react';
import Auth from './Auth';

test('Auth should display Header and AuthForm when user is not logged in', () => {
  const { container } = render(<Auth setCurrentUser={null} />);

  screen.getByText('login');
  screen.getByText('register');
  screen.getAllByDisplayValue('');
  screen.getByPlaceholderText('email@example.com');
  screen.getByPlaceholderText('password');
  screen.getByText('submit');

  expect(container).toMatchSnapshot();
});

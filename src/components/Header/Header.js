import classNames from 'classnames';
import './Header.css';

export default function Header({ type, setType, setMessage }) {
  return (
    <header>
      <h1
        onClick={() => {
          setType('login');
          setMessage('');
        }}
        className={classNames({ active: type === 'login' })}
      >
        Login
      </h1>
      <h1
        onClick={() => {
          setType('register');
          setMessage('');
        }}
        className={classNames({ active: type === 'register' })}
      >
        Register
      </h1>
    </header>
  );
}

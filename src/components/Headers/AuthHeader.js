import classNames from 'classnames';
import './AuthHeader.css';

export default function AuthHeader({ type, setType, setMessage }) {
  return (
    <header>
      <h1
        className={classNames({ active: type === 'login' })}
        onClick={() => {
          setType('login');
          setMessage('');
        }}
      >
        Login
      </h1>
      <h1
        className={classNames({ active: type === 'register' })}
        onClick={() => {
          setType('register');
          setMessage('');
        }}
      >
        Register
      </h1>
    </header>
  );
}

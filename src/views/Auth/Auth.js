import { useState } from 'react';
import * as users from '../../services/users';
import Header from '../../components/Header/Header';
import AuthForm from '../../components/AuthForm/AuthForm';
import './Auth.css';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    let response;
    try {
      e.preventDefault();
      response =
        type === 'login'
          ? await users.loginUser(email, password)
          : await users.registerUser(email, password);
      setMessage('Success! Redirecting...');
      setTimeout(() => {
        setCurrentUser(response);
      }, 1000);
    } catch {
      setMessage('Invalid email or password');
    }
  };

  return (
    <>
      <div>
        <Header {...{ type, setType, setMessage }} />
        <AuthForm {...{ email, setEmail, password, setPassword, message, handleSubmit }} />
      </div>
    </>
  );
}

import './AuthForm.css';

export default function AuthForm({
  email,
  setEmail,
  password,
  setPassword,
  message,
  handleSubmit,
}) {
  return (
    <>
      <p>{message}</p>
      <form className="auth-form">
        <label htmlFor="email">e-mail:</label>
        <input
          name="email"
          value={email}
          type="email"
          placeholder="email@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">password:</label>
        <input
          name="password"
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submit-button" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </>
  );
}

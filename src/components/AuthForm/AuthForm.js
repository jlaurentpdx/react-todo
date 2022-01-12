export default function AuthForm({
  email,
  setEmail,
  password,
  setPassword,
  message,
  handleSubmit,
}) {
  return (
    <div>
      <p style={{ color: '#ff0000' }}>{message}</p>
      <form className="auth-form">
        <label htmlFor="email">E-mail:</label>
        <input
          name="email"
          value={email}
          type="email"
          placeholder="email@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

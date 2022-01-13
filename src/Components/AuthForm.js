export default function AuthForm({
  errorMessage,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>{errorMessage}</p>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

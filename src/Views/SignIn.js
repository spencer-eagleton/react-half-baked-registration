import AuthForm from '../Components/AuthForm';
import { useState } from 'react';
import { signInUser } from '../services/users';

export default function SignIn() {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
    } catch {
      setErrorMessage('error. invalid login, dummy.');
    }
  };
  return (
    <div>
      <h1>Sign In</h1>
      <AuthForm
        errorMessage={errorMessage}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

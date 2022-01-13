import AuthForm from '../Components/AuthForm';
import { useState } from 'react';
import { signUpUser } from '../services/users';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await signUpUser(email, password);
    console.log(resp);
  };
  return (
    <div>
      <h1>Sign up</h1>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

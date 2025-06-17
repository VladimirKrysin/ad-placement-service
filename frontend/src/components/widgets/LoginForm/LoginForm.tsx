import { useState } from 'react';
import {
  useLoginMutation,
  useRegistrationMutation,
} from '../../../api/auth/index';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading: isLoggingIn }] = useLoginMutation();
  const [register, { isLoading: isRegistering }] = useRegistrationMutation();

  const handleLogin = () => {
    login({ email, password })
      .unwrap()
      .catch((err) => console.error('Ошибка входа:', err));
  };

  const handleRegistration = () => {
    register({ email, password })
      .unwrap()
      .catch((err) => console.error('Ошибка регистрации:', err));
  };

  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Пароль'
      />
      <button onClick={handleLogin} disabled={isLoggingIn}>
        {isLoggingIn ? 'Вхожу…' : 'Логин'}
      </button>
      <button onClick={handleRegistration} disabled={isRegistering}>
        {isRegistering ? 'Регистрирую…' : 'Регистрация'}
      </button>
    </div>
  );
};

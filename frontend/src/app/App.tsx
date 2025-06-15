import { useState } from 'react';
import './styles/App.css';
import { RouterProvider } from 'react-router';
import { router } from './router/router';
import { Login } from '../components/widgets/Login/Login';

function App() {
  const [token, setToken] = useState<string | null>(null);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return <RouterProvider router={router} />;
}

export { App };

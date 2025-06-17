import { createBrowserRouter, Navigate } from 'react-router';
import { LoginForm } from '../../components/widgets/LoginForm/LoginForm';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginForm />,
  },
  {
    path: '/',
    element: <Navigate to='/login' replace />, // всё ведёт на /login
  },
  {
    path: '*',
    element: <Navigate to='/login' replace />, // несуществующие пути → /login
  },
]);

export { router };

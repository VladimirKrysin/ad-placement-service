import { createBrowserRouter } from 'react-router';
import { Dashboard } from '../../components/widgets/Dashboard';
import { Preferences } from '../../components/widgets/Preferences';

function Root() {
  return <h1>Hello world</h1>;
}

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
  },
  {
    path: '/dashboard',
    Component: Dashboard,
  },
  {
    path: '/preferences',
    Component: Preferences,
  },
]);

export { router };

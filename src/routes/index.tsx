import { RouteObject } from 'react-router-dom';
import exchangeRoutes from './exchange.routes';
import accountRoutes from './account.routes';
import authRoutes from './auth.routes';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'exchange/*',
        children: exchangeRoutes,
      },
      {
        path: 'accounts/*',
        children: accountRoutes,
      },
      {
        path: 'auth/*',
        children: authRoutes,
      },
    ],
  },
]; 
import { RouteObject } from 'react-router-dom';
import { AccountLayout } from '@/layouts';
import { Accounts } from '@/pages/account';
import { lazy } from 'react';
import { AuthGuard } from '@/routes/guards/AuthGuard';

const AccountDetail = lazy(() => import('@/pages/AccountDetail'));

const accountRoutes: RouteObject[] = [
  {
    element: (
      <AuthGuard>
        <AccountLayout />
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        element: <Accounts />,
      },
      {
        path: ':id',
        element: <AccountDetail />,
      },
    ],
  },
];

export default accountRoutes; 
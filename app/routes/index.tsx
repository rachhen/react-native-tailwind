import React from 'react';

import AppRoutes from './app';
import AuthRoutes from './auth';
import {useAuth} from '~/contexts/auth';

const Routes = () => {
  const {user} = useAuth();

  if (user) {
    return <AppRoutes />;
  }

  return <AuthRoutes />;
};

export default Routes;

import React, { useContext } from 'react'
import AuthContext from '../contexts/auth.context';
import AuthRoutes from './auth.route';
import AppRoutes from './app.route';

const Routes = () => {
  const { isSigned } = useContext(AuthContext)

  return isSigned ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;

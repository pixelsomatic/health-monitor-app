import React, { useContext } from 'react'
import { View, StyleSheet, ActivityIndicator } from "react-native"
import AuthContext from '../contexts/auth.context';
import AuthRoutes from './auth.route';
import AppRoutes from './app.route';

const Routes = () => {
  const { login, logout } = useContext(AuthContext)
  // const { color } = useContext(ColorContext)
  const loading = null;

  if (loading) {
    return (
      <View style={[styles.container, { flex: 1, justifyContent: 'center' }]}>
        <ActivityIndicator
          size={'large'}
          // visible={loading}
          // size="large"
          // color={color}
        />
      </View>
    )
  }

  return <AppRoutes />;
  // return <AuthRoutes />;
  // return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#363940',
    paddingTop: 20
  },
})
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth.context';
import Routes from './src/routes';
import Toast from 'react-native-toast-message';

export type RootStackParamList = {
  Login: undefined;
  SignUp: {email: string, password: string};
  Home: { itemId: number, otherParam: string };
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
      <Toast/>
    </NavigationContainer>
  );
}


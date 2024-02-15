import React from 'react';
import LoginScreen from './src/components/organisms/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/organisms/HomeScreen';
import { AuthProvider } from './src/contexts/auth.context';
import Routes from './src/routes';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Login: undefined;
  Home: { itemId: number, otherParam: string };
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}


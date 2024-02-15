import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../components/organisms/LoginScreen'; 
import SignUpScreen from '../components/organisms/SignUpScreen';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen 
      name="Login" 
      component={LoginScreen} 
      options={{headerShown: false}}
    />
    <AuthStack.Screen 
      name="SignUp" 
      component={SignUpScreen} 
      options={{headerTransparent: true, title: ''}}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
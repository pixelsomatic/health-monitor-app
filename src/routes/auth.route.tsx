import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../components/organisms/LoginScreen'; 


const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator 
    // screenOptions={{
    //   headerStyle: {
    //     backgroundColor: '#40444B',
    //     borderBottomColor: '#40444B',
    //   },
    //   headerTintColor: '#fff',
    //   cardStyle: { backgroundColor: "#363940" }
    //   }}
  >
    <AuthStack.Screen 
      name="Login" 
      component={LoginScreen} 
      options={{headerShown: false}}
    />
    {/* <AuthStack.Screen name="Criar sua conta"
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Nunito'
        },
        animationTypeForReplace: 'push'
      }}
      component={RegisterScreen} /> */}
  </AuthStack.Navigator>
);

export default AuthRoutes;
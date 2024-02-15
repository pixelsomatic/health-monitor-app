import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../components/organisms/HomeScreen'

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
     <AppStack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        headerTransparent: true,
        title: "Health",
        headerTitleAlign: 'center',
        headerLeft: () => <></>,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </AppStack.Navigator>
);

export default AppRoutes
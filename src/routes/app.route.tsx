import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../components/organisms/HomeScreen'
import { Icon, MD3Colors } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';
import AuthContext from '../contexts/auth.context';
import { colors } from '../designSystem/color';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  const { logOut } = useContext(AuthContext);

  return (
    <AppStack.Navigator>
       <AppStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          title: "Health",
          headerTitleAlign: 'center',
          headerLeft: () => <></>,
          headerRight: () => (
            <TouchableOpacity onPress={logOut} style={{paddingRight: 20}}>
              <Icon
                source="exit-to-app"
                color={MD3Colors.neutral10}
                size={25}
              />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </AppStack.Navigator>
  );
} 

export default AppRoutes
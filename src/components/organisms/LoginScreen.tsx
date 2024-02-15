import React from 'react';
import LoginForm from '../molecules/LoginForm';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../designSystem/color';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
const LoginScreen = ({ navigation }:  { navigation: LoginScreenNavigationProp }) => {
  return (
    <View style={styles.container}>
      <LoginForm navigation={navigation} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import React from 'react';
import LoginForm from '../molecules/LoginForm';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../designSystem/color';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <LoginForm />
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
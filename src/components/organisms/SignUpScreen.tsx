import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../designSystem/color';
import SignUpForm from '../molecules/SignUpForm';

const SignUpScreen = () => {  
  return (
    <View style={styles.container}>
      <SignUpForm />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
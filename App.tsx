import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './src/components/organisms/LoginScreen';
import { colors } from './src/designSystem/color';

export default function App() {
  return (
    <View style={styles.container}>
     <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

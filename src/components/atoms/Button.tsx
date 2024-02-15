import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Button as RNButton } from 'react-native-paper';
import Text from './Text';
import { colors } from '../../designSystem/color';
import { sizes } from '../../designSystem/grid';

type ButtonProps = {
  children: React.ReactNode;
  onSubmit: () => void;
  buttonColor?: string;
  textColor?: string;
  loading?: boolean;
}

const Button = ({ onSubmit, children, loading }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onSubmit}>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <Text type='labelButton' variant='labelLarge'>{children}</Text>
      )}
    </TouchableOpacity>
   
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: sizes.md,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    width: sizes.eighty
  }
})

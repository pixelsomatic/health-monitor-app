import React, { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import {TextInput as RNInputText} from 'react-native-paper';
import { colors } from '../../designSystem/color';
import { sizes } from '../../designSystem/grid';

type SearchInputProps = {
  onChange: (value: string) => void;
  value?: string;
  label: string;
  secureTextEntry?: boolean;
  type?: 'email-address' | 'default';
  placeholder: string;
};

const TextInput = ({
  onChange, 
  value, 
  label, 
  secureTextEntry,
  type,
  placeholder
}: SearchInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <RNInputText
      keyboardType={type}
      mode="flat"
      placeholder={placeholder}
      onChangeText={text => onChange(text)}
      value={value}
      style={styles.input}
      label={label}
      secureTextEntry={!showPassword && secureTextEntry}
      autoComplete={'off'}
      right={
        secureTextEntry ?
        <RNInputText.Icon
        onPress={() => setShowPassword(!showPassword)}
         icon={showPassword ? 'eye-off' : 'eye'} 
        /> : <></>
      }
    />
  );
}
  

export default TextInput;

const styles = StyleSheet.create({
  input: {
    color: colors.primary,
    width: sizes.eighty,
    marginBottom: sizes.md,
    height: 60
  }
})
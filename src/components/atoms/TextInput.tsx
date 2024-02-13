import React from 'react';
import { StyleSheet } from 'react-native';
import {TextInput as RNInputText} from 'react-native-paper';

type SearchInputProps = {
  onSearch: (value: string) => void;
  onChange: (value: string) => void;
  value?: string;
};

const TextInput = ({onSearch, onChange, value}: SearchInputProps) => (
  <RNInputText
    mode="flat"
    placeholder="Email"
    onChangeText={text => onChange(text)}
    value={value}
    style={styles.input}
    label="Email"
  />
);

export default TextInput;

const styles = StyleSheet.create({
  input: {
    color: '',
    width: '80%',
  }
})
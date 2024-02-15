import React, {useContext, useState} from 'react';
import Button from '../atoms/Button';
import TextInput from '../atoms/TextInput';
import Text from '../atoms/Text';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../designSystem/color';
import AuthContext from '../../contexts/auth.context';
import Toast from 'react-native-toast-message';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const { signUp } = useContext(AuthContext);
  
  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Password does not match',
      });
      return;
    }

    signUp(email, password);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text type='header' variant='headlineSmall'>Create Account</Text>
        <TextInput
          label='E-mail' 
          onChange={(value) => setEmail(value)} 
          value={email}
          type='email-address'
          placeholder='Use your best e-mail address'
        />
        <TextInput
          label='Password' 
          onChange={(value) => setPassword(value)} 
          value={password}
          secureTextEntry
          placeholder='Create a strong password'
        />
        <TextInput
          label='Confirm Password' 
          onChange={(value) => setConfirmPassword(value)} 
          value={confirmPassword}
          secureTextEntry
          placeholder='confirm the password'
        />
        <Button 
          onSubmit={handleSignUp} 
          buttonColor={colors.primary}
          textColor={colors.secondary}
        >
          Sign Up
        </Button>
      </View>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 100
  }
})
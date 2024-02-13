import React, {useState} from 'react';
import Button from '../atoms/Button';
import TextInput from '../atoms/TextInput';
import Text from '../atoms/Text';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { colors } from '../../designSystem/color';
import logo from './../../images/logo.png';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Handle the login logic here
  };

  return (
    <View>
      <Image source={logo} style={styles.image} />
      <View style={styles.container}>
        <Text type='header' variant='headlineSmall'>Login</Text>
        <TextInput
          label='E-mail' 
          onChange={(value) => setEmail(value)} 
          value={email}
          type='email-address'
        />
        <TextInput
          label='Password' 
          onChange={(value) => setPassword(value)} 
          value={password}
          secureTextEntry
        />
        <Button 
          onSubmit={handleLogin} 
          buttonColor={colors.primary}
          textColor={colors.secondary}
        >
          Log in
        </Button>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
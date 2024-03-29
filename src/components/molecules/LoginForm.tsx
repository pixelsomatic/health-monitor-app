import React, {useContext, useState} from 'react';
import Button from '../atoms/Button';
import TextInput from '../atoms/TextInput';
import Text from '../atoms/Text';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../designSystem/color';
import logo from './../../images/logo.png';
import AuthContext from '../../contexts/auth.context';
import { LoginScreenNavigationProp } from '../organisms/LoginScreen';

const LoginForm = ({ navigation }:  { navigation: LoginScreenNavigationProp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { signIn } = useContext(AuthContext);

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
          placeholder='Add your best e-mail address'
        />
        <TextInput
          label='Password' 
          onChange={(value) => setPassword(value)} 
          value={password}
          secureTextEntry
          placeholder='Add a strong password'
        />
        <Button 
          onSubmit={() => signIn(email, password)} 
          buttonColor={colors.primary}
          textColor={colors.secondary}
        >
          Log in
        </Button>
        <View style={styles.signUp}>
          <Text type='text'>
            Don't have an account?
          </Text>
            <TouchableOpacity 
              style={{marginLeft: 10}}
              onPress={() => navigation.navigate('SignUp')}>
              <Text type='text' variant='labelLarge'>
                Sign up
              </Text>
            </TouchableOpacity>
        </View>
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
  },
  signUp: {
    marginTop: 30,
    flexDirection: 'row'
  }
})
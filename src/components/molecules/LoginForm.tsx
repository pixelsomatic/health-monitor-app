import React from 'react';
import Button from '../atoms/Button';
import TextInput from '../atoms/TextInput';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Handle the login logic here
  };

  return (
    <>
      <TextInput onChange={() => console.log('first')} value='' onSearch={() => console.log('first')} />
      <Button title="Login" onPress={handleLogin} />
    </>
  );
};

export default LoginForm;

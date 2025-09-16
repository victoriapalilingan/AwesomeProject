import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextInput from './components/TextInput';
import Button from './components/Button';
import Title from './components/Title';

const Exercise5 = () => {
  return (
    <View style={styles.container}>
      <Title>Welcome</Title>
      <TextInput placeholder="Masukkan Email Anda" label="Username" />
      <TextInput
        placeholder="Masukkan password Anda"
        label="Password"
        secureTextEntry={true}
      />
      <Button label="Sign In" />
      <Button label="Sign in Google" color="#DB4437" colorText="#ffffff" />
      <Button label="Sign in Facebook" color="#1877F2" colorText="#ffffff" />
      <Button label="Sign in Apple" color="#000000" colorText="#ffffff" />
    </View>
  );
};

export default Exercise5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
});

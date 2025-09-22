import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Title from './components/Title';
import TextInput from './components/TextInput';
import Button from './components/Button';

const Registration = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handlePhoneChange = text => {
    if (/[^0-9]/.test(text)) {
      setPhoneError('Hanya boleh input angka');
    } else {
      setPhoneError('');
    }
    setPhone(text.replace(/[^0-9]/g, ''));
  };

  const onRegister = () => {
    console.log({
      name,
      username,
      email,
      address,
      phone,
    });
  };

  return (
    <View style={styles.container}>
      <Title>Registration</Title>

      <TextInput
        placeholder="Masukan nama lengkap anda"
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
      />

      <TextInput
        placeholder="Masukan username anda"
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />

      <TextInput
        placeholder="Masukan email anda"
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Masukan alamat anda"
        label="Address"
        value={address}
        onChangeText={text => setAddress(text)}
      />

      <TextInput
        placeholder="Masukan Nomor telepon anda"
        label="Phone Number"
        value={phone}
        onChangeText={handlePhoneChange}
        keyboardType="numeric"
      />
      {phoneError ? <Text style={styles.error}>{phoneError}</Text> : null}

      <Button label="Register" onPress={onRegister} />
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 25,
    backgroundColor: '#fff',
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
    marginTop: -10,
  },
});

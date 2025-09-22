import React from 'react';
import {TextInput as Input, Text, StyleSheet} from 'react-native';

const TextInput = ({placeholder, label, ...rest}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        {...rest}
      />
    </>
  );
};
export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 15,
    color: 'black',
  },
  label: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 6,
    color: '#000',
  },
});

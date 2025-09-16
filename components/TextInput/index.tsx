import React from 'react';
import {TextInput as RNTextInput, Text, StyleSheet, View} from 'react-native';

interface Props {
  label?: string;
  placeholder?: string;
  [key: string]: any;
}

const TextInput: React.FC<Props> = ({label, placeholder, ...rest}) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNTextInput style={styles.input} placeholder={placeholder} {...rest} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 14,
    color: 'black',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
});

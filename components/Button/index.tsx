import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

interface ButtonProps {
  label: string;
  color?: string;
  colorText?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  color = 'orange',
  colorText = 'black',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      activeOpacity={0.5}>
      <Text style={[styles.buttonText, {color: colorText}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});

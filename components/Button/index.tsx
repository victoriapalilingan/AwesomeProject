import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Button = ({label, color = '#bb00ffff', colorText = '#fff', onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button(color)}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.buttonText(colorText)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: (color: string) => ({
    backgroundColor: color,
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  }),
  buttonText: (colorText: string) => ({
    color: colorText,
    fontSize: 18,
    fontWeight: '600',
  }),
});

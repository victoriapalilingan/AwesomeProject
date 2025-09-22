import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({children, color = 'black'}) => {
  return <Text style={styles.title(color)}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: (color: string) => ({
    fontSize: 32,
    fontWeight: 'bold',
    color: color,
    marginBottom: 30,
  }),
});

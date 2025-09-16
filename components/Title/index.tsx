import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});

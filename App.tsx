import React from 'react';
import {Text, StyleSheet} from 'react-native';

//Komponen adalah fungsi yang mengembalikan JSX
const App = () => {
  return (
    //JSX
    <Text style={style.title}> Basic React Native </Text>
    //Sebaiknya pakai cara kedua
  );
};

export default App;

const style = StyleSheet.create({
  title: {
    backgroundColor: 'yellow',
    color: 'red',
    fontSize: 30, //Ukuran Font
    textAlign: 'center', //Posisi
    margin: 20, //Jarak Kiri Kanan
    fontWeight: '600', //Ketebalan
  },
});

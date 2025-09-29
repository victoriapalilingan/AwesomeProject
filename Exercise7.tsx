import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

const Exercise7 = () => {
  return (
    <>
      <View style={styles.redContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>

      <View style={styles.whiteContainer}>
        <Image
          source={require('./assets/logo-with-motto-3.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.blueContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </>
  );
};

export default Exercise7;

const styles = StyleSheet.create({
  redContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // biar semua box ke kiri
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1 / 2,
    paddingLeft: 20, // jarak dari tepi kiri
  },

  blueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'blue',
    flex: 1 / 2,
  },

  whiteContainer: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  blackBox: {
    height: 87,
    width: 87,
    backgroundColor: 'black',
    marginRight: 20,
  },

  yellowBox: {
    height: 87,
    width: 87,
    backgroundColor: 'yellow',
    marginRight: 20,
  },

  logo: {
    width: 400,
    height: 240,
  },
});

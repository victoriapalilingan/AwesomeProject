import React from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  Text,
  View,
  ImageBackground,
} from 'react-native';

const Exercise3 = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/564x/f4/66/c7/f466c7abac01efff5636e2c498c869a4.jpg',
      }}
      style={styles.background}
      resizeMode="cover">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        {/* Foto Lokal */}
        <Image
          style={styles.photo}
          resizeMode="cover"
          source={require('./assets/victoria.jpg')}
        />

        {/* Biodata */}
        <View style={styles.card}>
          <Text style={styles.title}>Biodata Mahasiswa</Text>
          <Text style={styles.text}>Nama: Palilingan, Victoria Dennis</Text>
          <Text style={styles.text}>Fakultas: Ilmu Komputer</Text>
          <Text style={styles.text}>Jurusan: Informatika</Text>
          <Text style={styles.text}>Semester: 5</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Exercise3;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  photo: {
    width: '100%', // full lebar layar
    height: 450, // tinggi besar biar jelas
    marginBottom: 20,
    borderRadius: 15, // sudut membulat
  },
  card: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.85)', // semi-transparan
    padding: 20,
    borderRadius: 15,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#003366', // biru tua biar matching dengan background
  },
  text: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
});

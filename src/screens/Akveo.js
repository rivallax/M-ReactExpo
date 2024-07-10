import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome';

const AkveoScreen = ({navigation}) => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // State untuk warna latar belakang

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const HomeIcon = props => <Icon name="home" size={20} color="white" />;

  const changeBackgroundColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Menghasilkan warna acak
    setBackgroundColor(randomColor);
  };

  return (
    <Layout style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text category="h1" style={styles.headerText}>
        Materi Akveo
      </Text>
      <Text category="p1" style={styles.contentText}>
        Akveo adalah sebuah library yang menyediakan berbagai komponen UI yang
        dapat digunakan dalam pengembangan aplikasi React Native. Library ini
        sangat membantu dalam membuat tampilan yang konsisten dan menarik dengan
        usaha yang minimal.
      </Text>
      <Button
        style={styles.button}
        onPress={navigateToHome}
        accessoryLeft={HomeIcon}>
        Kembali ke Home
      </Button>
      <Button
        style={styles.button}
        onPress={changeBackgroundColor} // Tombol untuk mengubah warna latar belakang secara acak
      >
        Ubah Warna Latar Belakang
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    marginBottom: 20,
  },
  contentText: {
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginVertical: 10,
  },
});

export default AkveoScreen;

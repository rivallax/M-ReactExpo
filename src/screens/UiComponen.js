import React from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

const Detail = () => {
  return (
    <View style={styles.header}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.headerText}>Materi Component</Text>
    </View>
  );
};

const App = () => {
  const handleLoginPress = () => {
    Alert.alert('Login tombol di tekan');
  };

  const handleRegisterPress = () => {
    Alert.alert('Register tombol di tekan');
  };

  const handleImagePress = () => {
    Alert.alert('Gambar di tekan');
  };

  return (
    <View style={styles.mainContainer}>
      <Detail />

      <View style={styles.rowContainer}>
        <View style={styles.box}>
          <Text style={styles.text}>KOTAK SATU</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>KOTAK DUA</Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>bulat</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>bulat</Text>
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text>Expo GO || hallo world || mempelajari ViewComponent</Text>
        <Text>Expo GO || hallo world || mempelajari ViewComponent</Text>
        <Text>Expo GO || hallo world || mempelajari ViewComponent</Text>
      </View>

      <TouchableOpacity
        style={styles.imageContainer}
        onPress={handleImagePress}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }} // url(online image)
        />
      </TouchableOpacity>

      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.loginBox} onPress={handleLoginPress}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerBox}
          onPress={handleRegisterPress}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#3b3c36',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  header: {
    alignSelf: 'center', // Memposisikan header di tengah layar
    width: '80%', // Menggunakan lebar 80% dari layar
    height: 60,
    backgroundColor: '#21252b',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#21252b',
    marginHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
  },
  text: {
    color: 'white',
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    marginHorizontal: 25,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: 'red',
  },
  textContainer: {
    marginTop: 30,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    width: 100,
    height: 50,
    backgroundColor: '#21252b',
    marginHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
  },
  registerBox: {
    width: 100,
    height: 50,
    backgroundColor: 'blue',
    marginHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default App;

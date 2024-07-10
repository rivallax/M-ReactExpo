import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({navigation}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigateToUiComponent = () => {
    navigation.navigate('UiComponen');
  };

  const navigateToManagementState = () => {
    navigation.navigate('ManagementState');
  };

  const navigateToAxiosFetch = () => {
    navigation.navigate('AxiosFetch');
  };

  const navigateToAkveo = () => {
    navigation.navigate('Akveo');
  };

  const navigateToApkSimple = () => {
    navigation.navigate('ApkSimple');
  };

  // application

  const navigateToDataBarang = () => {
    navigation.navigate('DataBarang');
  };

  const navigateToJualBarang = () => {
    navigation.navigate('JualBarang');
  };

  const navigateToMasukBarang = () => {
    navigation.navigate('MasukBarang');
  };

  const navigateToTambahBarang = () => {
    navigation.navigate('TambahBarang');
  };

  const containerStyles = [
    styles.container,
    isDarkMode && styles.darkContainer,
  ];

  const headerStyles = [styles.header, isDarkMode && styles.darkHeader];

  const buttonTextStyles = [
    styles.buttonText,
    isDarkMode && styles.darkButtonText,
  ];

  return (
    <Layout style={containerStyles}>
      <TouchableOpacity onPress={toggleDarkMode} style={styles.toggleButton}>
        <Icon
          name={isDarkMode ? 'moon-o' : 'sun-o'}
          size={20}
          color="#007BFF"
          style={styles.toggleIcon}
        />
      </TouchableOpacity>

      <Layout style={headerStyles}>
        <Text category="h1" style={styles.headerText}>
          Materi React Native
        </Text>
      </Layout>

      <Button
        style={styles.button}
        onPress={navigateToManagementState}
        accessoryLeft={() => <Icon name="cogs" size={20} color="white" />}>
        <Text style={buttonTextStyles}>Management State</Text>
      </Button>

      <Button
        style={styles.button}
        onPress={navigateToUiComponent}
        accessoryLeft={() => <Icon name="list-alt" size={20} color="white" />}>
        <Text style={buttonTextStyles}>UI Component</Text>
      </Button>

      <Button
        style={styles.button}
        onPress={navigateToAxiosFetch}
        accessoryLeft={() => (
          <Icon name="newspaper-o" size={20} color="white" />
        )}>
        <Text style={buttonTextStyles}>Axios Fetch Api</Text>
      </Button>

      <Button
        style={styles.button}
        onPress={navigateToAxiosFetch}
        accessoryLeft={() => (
          <Icon name="newspaper-o" size={20} color="white" />
        )}>
        <Text style={buttonTextStyles}>Axios Fetch Api</Text>
      </Button>

      <Button
        style={styles.button}
        onPress={navigateToAkveo}
        accessoryLeft={() => <Icon name="cube" size={20} color="white" />}>
        <Text style={buttonTextStyles}>Akveo</Text>
      </Button>

      <Button
        style={styles.button}
        onPress={navigateToApkSimple}
        accessoryLeft={() => <Icon name="list-alt" size={20} color="white" />}>
        <Text style={buttonTextStyles}>ApkSimple</Text>
      </Button>

      {/* application */}
      <Button
        style={styles.button}
        onPress={navigateToDataBarang}
        accessoryLeft={() => (
          <Icon name="shopping-cart" size={20} color="white" />
        )}>
        <Text style={buttonTextStyles}>Data Barang</Text>
      </Button>

      <Button
        style={styles.button}
        onPress={navigateToJualBarang}
        accessoryLeft={() => <Icon name="money" size={20} color="white" />}>
        <Text style={buttonTextStyles}>Penjualan Barang</Text>
      </Button>

      <Button
        style={styles.button}
        onPress={navigateToMasukBarang}
        accessoryLeft={() => (
          <Icon name="plus-circle" size={20} color="white" />
        )}>
        <Text style={buttonTextStyles}>Masukan Barang</Text>
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Light mode background color
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  darkContainer: {
    backgroundColor: '#21252b', // Dark mode background color
  },
  header: {
    width: '80%',
    height: 60,
    backgroundColor: '#21252b', // Dark mode header background color
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    marginTop: 20, // Moved header up
  },
  darkHeader: {
    backgroundColor: '#000', // Dark mode header background color
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  button: {
    width: '60%',
    marginVertical: 10,
    backgroundColor: '#21252b', // Dark mode button background color
  },
  buttonText: {
    color: 'white', // Light mode button text color
  },
  darkButtonText: {
    color: '#fff', // Dark mode button text color
  },
  toggleButton: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 10,
  },
  toggleIcon: {
    marginRight: 10,
  },
});

export default HomeScreen;

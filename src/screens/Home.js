// Home.js

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  const navigateToUiComponent = () => {
    navigation.navigate('UiComponen');
  };
  const navigateToManagementState = () => {
    navigation.navigate('ManagementState');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Materi React Native</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.navigateButton]}
        onPress={navigateToManagementState}>
        <Text style={styles.buttonText}>Materi ManagementState</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.navigateButton]}
        onPress={navigateToUiComponent}>
        <Text style={styles.buttonText}>Materi Ui Component</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778899',
    justifyContent: 'flex-start', // atau bisa juga 'space-between' tergantung preferensi
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    width: '80%',
    height: 60,
    backgroundColor: '#21252b',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    elevation: 5,
    backgroundColor: '#21252b',
  },
  navigateButton: {
    backgroundColor: '#C0C0C0',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

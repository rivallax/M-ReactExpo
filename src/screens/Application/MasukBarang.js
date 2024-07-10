import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

const MasukBarang = () => {
  const [editText, setEditText] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(2); // Set default to 2 for MasukBarang
  const navigation = useNavigation();

  const navigateToDataBarang = () => {
    navigation.navigate('DataBarang');
  };

  const navigateToJualBarang = () => {
    navigation.navigate('JualBarang');
  };

  return (
    <View style={styles.container}>
      <Text>Ini layar masuk barang</Text>
      <TextInput
        style={styles.input}
        value={editText}
        onChangeText={setEditText}
        placeholder="Edit disini..."
      />
      <Button
        title="Simpan"
        onPress={() => alert('Simpan teks: ' + editText)}
      />

      <BottomNavigation
        selectedIndex={selectedIndex}
        onSelect={index => {
          setSelectedIndex(index);
          if (index === 0) {
            navigateToDataBarang();
          } else if (index === 1) {
            navigateToJualBarang();
          } else {
            // Stay on MasukBarang
          }
        }}
        appearance="noIndicator"
        style={styles.bottomNavigation}>
        <BottomNavigationTab title="Home" />
        <BottomNavigationTab title="Jual" />
        <BottomNavigationTab title="Barang Baru" />
        <BottomNavigationTab title="Profil" />
      </BottomNavigation>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
  },
  bottomNavigation: {
    marginVertical: 8,
  },
});

export default MasukBarang;

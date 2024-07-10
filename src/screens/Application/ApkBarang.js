import React from 'react';
import {StyleSheet} from 'react-native';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

const BottomNavigationAccessoriesShowcase = () => {
  const navigation = useNavigation();

  const useBottomNavigationState = (initialState = 0) => {
    const [selectedIndex, setSelectedIndex] = React.useState(initialState);
    return {selectedIndex, onSelect: setSelectedIndex};
  };

  const bottomState = useBottomNavigationState();

  React.useEffect(() => {
    switch (bottomState.selectedIndex) {
      case 0:
        navigation.navigate('DataBarang');
        break;
      case 1:
        navigation.navigate('MasukBarang');
        break;
      case 2:
        navigation.navigate('JualBarang');
        break;
      default:
        break;
    }
  }, [bottomState.selectedIndex]);

  return (
    <BottomNavigation style={styles.bottomNavigation} {...bottomState}>
      <BottomNavigationTab title="Data Barang" />
      <BottomNavigationTab title="Masuk Barang" />
      <BottomNavigationTab title="Jual Barang" />
    </BottomNavigation>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});

export default BottomNavigationAccessoriesShowcase;

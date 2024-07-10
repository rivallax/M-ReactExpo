import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  BottomNavigation,
  BottomNavigationTab,
  Card,
  Text,
  Button,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const furnitureData = [
  {
    name: 'Lampu Belajar',
    description:
      'Lampu untuk belajar dengan intensitas cahaya yang bisa diatur.',
    price: 500000,
    image: require('./images/lampu-belajar.jpg'),
  },
  {
    name: 'Kursi',
    description: 'Sofa nyaman untuk ruang tamu.',
    price: 1500000,
    image: require('./images/kursi.jpg'),
  },
  {
    name: 'Meja',
    description: 'Meja untuk belajar atau bekerja.',
    price: 2000000,
    image: require('./images/meja.jpg'),
  },
  {
    name: 'Lemari',
    description: 'Lemari dengan banyak ruang penyimpanan.',
    price: 3000000,
    image: require('./images/lemari.jpg'),
  },
  {
    name: 'Lampu Belajar',
    description:
      'Lampu untuk belajar dengan intensitas cahaya yang bisa diatur.',
    price: 500000,
    image: require('./images/lampu-belajar.jpg'),
  },
  {
    name: 'Kursi',
    description: 'Sofa nyaman untuk ruang tamu.',
    price: 1500000,
    image: require('./images/kursi.jpg'),
  },
  {
    name: 'Meja',
    description: 'Meja untuk belajar atau bekerja.',
    price: 2000000,
    image: require('./images/meja.jpg'),
  },
  {
    name: 'Lemari',
    description: 'Lemari dengan banyak ruang penyimpanan.',
    price: 3000000,
    image: require('./images/lemari.jpg'),
  },
];

const BottomNavigationAccessoriesShowcase = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigation = useNavigation();

  const formatRupiah = harga => {
    return `Rp ${harga.toLocaleString('id-ID')}`;
  };

  const CartIcon = props => (
    <Icon {...props} name="shopping-cart" size={24} style={styles.cartIcon} />
  );

  const navigateToJualBarang = () => {
    navigation.navigate('JualBarang');
  };

  const navigateToMasukBarang = () => {
    navigation.navigate('MasukBarang');
  };

  const struckAlert = (productName, productPrice) => {
    Alert.alert(
      'Detail Furniture',
      `Anda memilih ${productName} dengan harga ${formatRupiah(productPrice)}`,
      [
        {text: 'Beli', onPress: () => console.log('Beli pressed')},
        {text: 'Tutup', onPress: () => {}}, // Do nothing on 'Tutup' press
      ],
      {cancelable: false},
    );
  };

  const navigateToDetail = (productName, productPrice) => {
    struckAlert(productName, productPrice);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.homeContainer}>
        <View style={styles.productContainer}>
          {furnitureData.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPressIn={() => navigateToDetail(item.name, item.price)} // Changed onPress to onPressIn
            >
              <Card style={styles.productCard}>
                <Image source={item.image} style={styles.productImage} />
                <Text category="s1" style={styles.productName}>
                  {item.name}
                </Text>
                <Text style={styles.priceText}>{formatRupiah(item.price)}</Text>
                <View style={styles.cartButtonContainer}>
                  <Button
                    style={styles.cartButton}
                    size="small"
                    appearance="ghost"
                    accessoryLeft={CartIcon}
                  />
                </View>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <BottomNavigation
        selectedIndex={selectedIndex}
        onSelect={index => {
          if (index === 0) {
            setSelectedIndex(index);
            // navigateToDataBarang(); // Uncomment this if you have a function for 'DataBarang'
          } else if (index === 1) {
            setSelectedIndex(index);
            navigateToJualBarang();
          } else {
            setSelectedIndex(index);
            navigateToMasukBarang();
          }
        }}
        appearance="noIndicator"
        style={styles.bottomNavigation}>
        <BottomNavigationTab title="Home" />
        <BottomNavigationTab title="jual" />
        <BottomNavigationTab title="Barang Baru" />
        <BottomNavigationTab title="Profil" />
      </BottomNavigation>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNavigation: {
    marginVertical: 8,
  },
  homeContainer: {
    flex: 1,
    padding: 16,
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: Dimensions.get('window').width / 2 - 24,
    marginBottom: 20,
    paddingBottom: 32, // Add padding to accommodate button
    position: 'relative', // Ensure position relative for absolute positioning of cart icon
  },
  productImage: {
    height: 100,
    width: '100%',
  },
  productName: {
    textAlign: 'center',
    marginTop: 8,
  },
  priceText: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#009688',
  },
  cartButtonContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  cartButton: {
    // No specific styles needed for the button itself
  },
  cartIcon: {
    marginBottom: -35, // Add margin bottom for spacing from price text
  },
});

export default BottomNavigationAccessoriesShowcase;

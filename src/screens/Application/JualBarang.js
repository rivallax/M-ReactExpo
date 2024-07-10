import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Alert} from 'react-native';
import {
  Layout,
  Text,
  Input,
  Button,
  Modal,
  Card,
  List,
  ListItem,
} from '@ui-kitten/components';
import {Table, Row, Rows} from 'react-native-table-component';

const JualBarang = () => {
  const [namaBarang, setNamaBarang] = useState('');
  const [hargaMasuk, setHargaMasuk] = useState('');
  const [hargaJual, setHargaJual] = useState('');
  const [barangList, setBarangList] = useState([
    {id: 1, namaBarang: 'Meja', hargaMasuk: '20000', hargaJual: '40000'},
    {id: 2, namaBarang: 'Kursi', hargaMasuk: '15000', hargaJual: '25000'},
    {id: 3, namaBarang: 'Lemari', hargaMasuk: '50000', hargaJual: '80000'},
  ]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleSimpan = () => {
    // Simpan data barang
    const newBarang = {
      id: barangList.length + 1,
      namaBarang: namaBarang,
      hargaMasuk: hargaMasuk,
      hargaJual: hargaJual,
    };
    setBarangList([...barangList, newBarang]);

    // Reset inputs
    setNamaBarang('');
    setHargaMasuk('');
    setHargaJual('');
  };

  const handleBeli = () => {
    // Menampilkan modal untuk membeli barang
    setIsVisible(true);
  };

  const handlePilihBarang = item => {
    setSelectedItem(item);
    setIsVisible(false);

    // Check kondisi barang yang dipilih
    if (item.namaBarang === 'Meja' && item.hargaJual === '40000') {
      Alert.alert('BARANG SUDAH DI AMBIL DAN SUDAH DIBAYAR');
    } else if (item.namaBarang === 'Kursi' && item.hargaJual === '25000') {
      Alert.alert('BARANG SUDAH DI AMBIL DAN SUDAH DIBAYAR');
    } else if (item.namaBarang === 'Lemari' && item.hargaJual === '80000') {
      Alert.alert('BARANG SUDAH DI AMBIL DAN SUDAH DIBAYAR');
    } else {
      Alert.alert('BARANG SUDAH DI AMBIL TAPI BELUM DI BAYAR');
    }
  };

  const renderItem = ({item}) => (
    <ListItem
      title={`${item.namaBarang} - Harga Jual: ${item.hargaJual}`}
      onPress={() => handlePilihBarang(item)}
    />
  );

  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <Text category="h1" style={styles.title}>
          Aplikasi Sederhana Penjualan
        </Text>
      </View>

      <View style={styles.formContainer}>
        <Input
          label="Nama Barang"
          placeholder="Masukkan nama barang"
          value={namaBarang}
          onChangeText={setNamaBarang}
          style={styles.input}
        />
        <Input
          label="Harga Barang Masuk (Rp)"
          placeholder="Masukkan harga barang masuk"
          value={hargaMasuk}
          onChangeText={setHargaMasuk}
          keyboardType="numeric"
          style={styles.input}
        />
        <Input
          label="Harga Barang Jual (Rp)"
          placeholder="Masukkan harga barang jual"
          value={hargaJual}
          onChangeText={setHargaJual}
          keyboardType="numeric"
          style={styles.input}
        />

        <Button onPress={handleSimpan} style={styles.button}>
          Simpan
        </Button>

        <ScrollView style={styles.tableContainer}>
          <Table borderStyle={styles.tableBorder}>
            <Row
              data={['Nama Barang', 'Harga Masuk (Rp)', 'Harga Jual (Rp)']}
              style={styles.tableHead}
              textStyle={styles.tableHeadText}
            />
            <Rows
              data={barangList.map(item => [
                item.namaBarang,
                item.hargaMasuk,
                item.hargaJual,
              ])}
              textStyle={styles.tableText}
            />
          </Table>
        </ScrollView>

        <Button onPress={handleBeli} style={styles.button}>
          Beli Barang
        </Button>

        {/* Modal untuk membeli barang */}
        <Modal
          visible={isVisible}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setIsVisible(false)}>
          <Card disabled={true}>
            <Text category="h6" style={{marginBottom: 10}}>
              Pilih barang yang ingin dibeli:
            </Text>
            <List data={barangList} renderItem={renderItem} />
          </Card>
        </Modal>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
  },
  input: {
    marginVertical: 8,
  },
  button: {
    marginVertical: 16,
  },
  tableContainer: {
    marginTop: 24,
  },
  tableBorder: {
    borderWidth: 1,
    borderColor: '#c8e1ff',
  },
  tableHead: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  tableHeadText: {
    margin: 6,
    fontWeight: 'bold',
  },
  tableText: {
    margin: 6,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default JualBarang;

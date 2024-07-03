import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    Alert.alert(
      'Materi ManagementState',
      'ManagementState merujuk pada bagaimana state atau keadaan data dikelola dan diperbarui/di ubah di dalam komponen atau aplikasi(dinamis).',
    );
  }, []);

  const handleButtonPress = value => {
    setInput(prevInput => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      const calculation = eval(input);
      if (calculation === Infinity || isNaN(calculation)) {
        setResult('Error');
      } else {
        setResult(calculation.toString());
      }
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{input}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#f0f0f0'}]}
            onPress={() => handleButtonPress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#f0f0f0'}]}
            onPress={() => handleButtonPress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#f0f0f0'}]}
            onPress={() => handleButtonPress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              styles.operationButton,
              {backgroundColor: '#ff9500'},
            ]}
            onPress={() => handleButtonPress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#f0f0f0'}]}
            onPress={() => handleButtonPress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#f0f0f0'}]}
            onPress={() => handleButtonPress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#f0f0f0'}]}
            onPress={() => handleButtonPress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              styles.operationButton,
              {backgroundColor: '#ff9500'},
            ]}
            onPress={() => handleButtonPress('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#f0f0f0'}]}
            onPress={() => handleButtonPress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#f0f0f0'}]}
            onPress={() => handleButtonPress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#f0f0f0'}]}
            onPress={() => handleButtonPress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              styles.operationButton,
              {backgroundColor: '#ff9500'},
            ]}
            onPress={() => handleButtonPress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#f0f0f0'}]}
            onPress={() => handleButtonPress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#f0f0f0'}]}
            onPress={() => handleClear()}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              styles.operationButton,
              {backgroundColor: '#ff9500'},
            ]}
            onPress={() => handleCalculate()}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              styles.operationButton,
              {backgroundColor: '#ff9500'},
            ]}
            onPress={() => handleButtonPress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
  },
  resultContainer: {
    padding: 20,
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 75,
    color: '#000000',
  },
  inputContainer: {
    padding: 20,
    alignItems: 'flex-end',
  },
  inputText: {
    fontSize: 40,
    color: '#000000',
  },
  buttonContainer: {
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: '#1e1e1e',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  operationButton: {
    backgroundColor: '#ff9500',
  },
  buttonText: {
    fontSize: 25,
    color: 'black',
  },
});

export default App;

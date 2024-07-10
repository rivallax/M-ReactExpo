import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import HomeScreen from './src/screens/Home';
import UiComponenScreen from './src/screens/UiComponen';
import ManagementStateScreen from './src/screens/ManagementState';
import AxiosFetchScreen from './src/screens/AxiosFetch';
import AkveoScreen from './src/screens/Akveo';
import ApkSimpleScreen from './src/screens/ApkSimple';
import DataBarangscreen from './src/screens/Application/DataBarang';
import JualBarangScreen from './src/screens/Application/JualBarang';
import MasukBarangScreen from './src/screens/Application/MasukBarang';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="UiComponen" component={UiComponenScreen} />
          <Stack.Screen name="AxiosFetch" component={AxiosFetchScreen} />
          <Stack.Screen name="Akveo" component={AkveoScreen} />
          <Stack.Screen
            name="ManagementState"
            component={ManagementStateScreen}
          />
          <Stack.Screen name="ApkSimple" component={ApkSimpleScreen} />

          {/* aplication */}

          <Stack.Screen name="DataBarang" component={DataBarangscreen} />
          <Stack.Screen name="JualBarang" component={JualBarangScreen} />
          <Stack.Screen name="MasukBarang" component={MasukBarangScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

export default App;

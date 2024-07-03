import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/Home';
import UiComponenScreen from './src/screens/UiComponen';
import ManagementStateScreen from './src/screens/ManagementState';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UiComponen" component={UiComponenScreen} />
        <Stack.Screen
          name="ManagementState"
          component={ManagementStateScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

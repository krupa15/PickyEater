/**
 * file: App.js
 * author: Krupa Patel <kpf097@uregina.ca>
 * version: 0.1
 * date-created: March-20-2022
 * last-modified: April-11-2022
 */
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, NavigationActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import storeReducer from './store/storeReducer';
const store = createStore(storeReducer);
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    backgroundColor: 'white',
  }
});

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

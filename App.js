import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { NavigationContainer, NavigationActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import img from './components/img/Mobile-Homescreen.jpg';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen.js';

export default function App() {
  /*const componentDidMount = () => {
    setTimeout(() => {
      NavigationActions.navigate('homeScreen'); 
    }, 2000); 
    <Image style={styles.homeScreen} source={require('./components/img/Mobile-Homescreen.jpg')} />
  };*/
  return (
    <View>
      <DetailScreen />
    </View>
  );
  
}

const styles = StyleSheet.create({
  /**homeScreen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }*/
});

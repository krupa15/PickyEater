import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, NavigationActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen.js';
import SplashScreen from './components/SplashScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  /*const componentDidMount = () => {
    setTimeout(() => {
      NavigationActions.navigate('homeScreen'); 
    }, 2000); 
    <Image style={styles.homeScreen} source={require('./components/img/Mobile-Homescreen.jpg')} />
  };*/
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>  
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  /**homeScreen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }*/
  navigationContainer: {
    backgroundColor: 'white',
  }
});

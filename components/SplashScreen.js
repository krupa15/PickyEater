/**
 * file: SplashScreen.js
 * author: Krupa Patel <kpf097@uregina.ca>
 * version: 0.1
 * date-created: April-8-2022
 * last-modified: April-11-2022
 */
import React, {Component} from 'react';
import { View,
         StyleSheet,
         Image,
         Dimensions } from 'react-native';

class SplashScreen extends Component {
  render() {
  return (
    <View style= {styles.container}>
        <Image style={styles.splashImg} source={require('./img/Homescreen.jpg')}/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  splashImg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});

export default SplashScreen;
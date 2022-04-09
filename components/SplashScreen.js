import React, {Component} from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

class SplashScreen extends Component {
  render() {
  return (
    <View style= {styles.container}>
      <TouchableOpacity>
        <Image style={styles.splashImg} source={require('./img/Homescreen.jpg')}/>
      </TouchableOpacity>
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
import * as React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

class SplashScreen extends React.Component {
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
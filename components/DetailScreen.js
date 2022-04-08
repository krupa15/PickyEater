import React, {Component} from 'react';
import { Text,
        View,
        StyleSheet,
        Image,
        Dimensions,
        SafeAreaView,
        TouchableOpacity,
} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SearchComponent from './SearchComponent';
import HealthLabels from './HealthLabels';
import Ingredients from './Ingredients';
import Nutritions from './Nutritions';

const Tab = createMaterialTopTabNavigator();

class DetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.fullContainer}>
        <View>
          <SearchComponent />
        </View>
        <View style={styles.searchSection}>
          <Image style={styles.imgStyle} source={require('./img/dummy.jpg')} />
        </View>
        <View>
          <Text style={styles.nameStyle}> Apple Elixir Recipe </Text>
          <Text style={styles.typeStyle}> Vegan | Vegetarian </Text>
          <Text style={styles.calIngStyle}> 1530 Calories | 5 Ingredients </Text>
        </View>
        <Tab.Navigator style={styles.tabNavigation} screenOptions={{
          tabBarActiveTintColor: '#10C146',
          tabBarInactiveTintColor: '#ccc',
          }}>
          <Tab.Screen name='Health Label' component={HealthLabels}/>
          <Tab.Screen name='Nutritions' component={Nutritions}/>
          <Tab.Screen name='Ingredients' component={Ingredients}/>
        </Tab.Navigator>
        <View style={styles.bottomFix}>
          <TouchableOpacity style={styles.bottomBtn}>
            <Text style={styles.bottomTxt}> SEE FULL RECIPE </Text>
          </TouchableOpacity>
        </View> 
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  fullContainer: {
    height: Dimensions.get('window').height,
    backgroundColor: 'white'
  },
  imgStyle: {
    width: Dimensions.get('window').width,
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 3,
  },
  typeStyle: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 10,
  },
  calIngStyle: {
    marginLeft: 10,
  },
  bottomBtn: {
    backgroundColor: '#10C146',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    padding: 26,
  },
  bottomTxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
  },
  bottomFix: {
    position: 'absolute',
    bottom: 0,
  },
  tabNavigation: {
    marginTop: 20,
  }
});

export default DetailScreen;
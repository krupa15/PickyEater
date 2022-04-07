import * as React from 'react';
import { Text,
        TextInput,
        View,
        StyleSheet,
        Image,
        Dimensions,
        ScrollView,
        SafeAreaView,
        TouchableOpacity,
        FlatList 
} from 'react-native';

import SearchComponent from './SearchComponent';

const DetailScreen = ({ navigation }) => {
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
      <ScrollView>
      </ScrollView>
      <View style={styles.bottomFix}>
        <TouchableOpacity style={styles.bottomBtn}>
          <Text style={styles.bottomTxt}> SEE FULL RECIPE </Text>
        </TouchableOpacity>
      </View> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullContainer: {
    height: Dimensions.get('window').height,
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
  }
});

export default DetailScreen;
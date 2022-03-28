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

const DetailScreen = () => {
  return (
    <SafeAreaView style={styles.fullContainer}>
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
    fontFamily: 'Century Gothic',
    fontSize: 18,
    fontWeight: 800,
    marginLeft: 10,
    marginTop: 3,
  },
  typeStyle: {
    fontFamily: 'Century Gothic',
    fontSize: 14,
    fontWeight: 800,
    marginLeft: 10,
  },
  calIngStyle: {
    fontFamily: 'Century Gothic',
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
    fontFamily: 'Century Gothic',
    fontSize: 16,
    fontWeight: 800,
  },
  bottomFix: {
    position: 'absolute',
    bottom: 0,
  }
});

export default DetailScreen;
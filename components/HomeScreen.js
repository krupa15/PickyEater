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

import ListItem from './listItem';
import logo from './img/logo.png';
import dummyImg from './img/dummy.jpg';

const StaticImg = "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/2/28/0/ei0914_spaghetti.jpg.rend.hgtvcom.406.305.suffix/1396634731643.jpeg";

const recipes = [
  { name: "Apple Elixir Recipe", type: "Vegan | Vegetarian", calories: "854 Calories", ingredients: "10 Ingredients", itemImg: StaticImg},
  { name: "Apple Cidar Syrup", type: "Vegan | Low-Potassium", calories: "854 Calories", ingredients: "10 Ingredients", itemImg: StaticImg},
  { name: "Double peanut Popcorn", type: "Vegan | Pescatarian", calories: "854 Calories", ingredients: "10 Ingredients", itemImg: StaticImg},
  { name: "Peanut Butter Cookies", type: "Vegan | Kidney-Friendly", calories: "854 Calories", ingredients: "10 Ingredients", itemImg: StaticImg},
  { name: "Apple Elixir Recipe", type: "Vegan | Vegetarian", calories: "854 Calories", ingredients: "10 Ingredients", itemImg: StaticImg},
  { name: "Apple Cidar Syrup", type: "Vegan | Low-Potassium", calories: "854 Calories", ingredients: "10 Ingredients", itemImg: StaticImg},
  { name: "Double peanut Popcorn", type: "Vegan | Pescatarian", calories: "854 Calories", ingredients: "10 Ingredients", itemImg: StaticImg},
  { name: "Peanut Butter Cookies", type: "Vegan | Kidney-Friendly", calories: "854 Calories", ingredients: "10 Ingredients", itemImg: StaticImg},
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchSection}>
        <Image style={styles.logo} source={require('./img/logo.png')} />
        <View style={styles.borderStyle}>
          <TextInput style={styles.inputStyle} placeholder="Search here"></TextInput>
        </View>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
          numColumns={2} 
          data={recipes}
          keyExtractor={(item, index) => index.toString()}
          renderItem= {( {item} ) => (<ListItem recipes={item}/>)}>
        </FlatList>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchSection: {
    flexDirection: 'row',
  },
  inputStyle: {
    height: 40,
    width: 250,
    margin: 8,
    borderWidth: 1,
    borderBottomEndRadius: 3,
    borderBottomLeftRadius: 3,
    borderTopEndRadius: 3,
    borderTopLeftRadius: 3,
    borderColor: '#ccc',
    padding: 10,
  },
  logo: {
    width:  60,
    height: 60,
    marginLeft: 5,
  },
  buttonStyle: {
    backgroundColor: '#10C146',
    height: 40,
    marginTop: 8,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    padding: 12,
  }
});

export default HomeScreen;
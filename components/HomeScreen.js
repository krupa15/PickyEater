import React, {Component} from 'react';
import { View,
        StyleSheet,
        ScrollView,
        SafeAreaView,
        FlatList 
} from 'react-native';

import ListItem from './listItem';
import SearchComponent from './SearchComponent';

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

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <SearchComponent />
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
});

export default HomeScreen;
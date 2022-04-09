import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  StatusBar,
  Dimensions
} from 'react-native';

import ListItem from './listItem';
import SearchComponent from './SearchComponent';
import SplashScreen from './SplashScreen';
import { fetchData } from '../Services/Api';
const StaticImg = "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/2/28/0/ei0914_spaghetti.jpg.rend.hgtvcom.406.305.suffix/1396634731643.jpeg";

const recipes = [
  { name: "Apple Elixir Recipe", type: "Vegan | Vegetarian", calories: "854 Calories", ingredients: "10 Ingredients", itemImg: StaticImg },
  { name: "Apple Cidar Syrup", type: "Vegan | Low-Potassium", calories: "854 Calories", ingredients: "10 Ingredients", itemImg: StaticImg },
  { name: "Double peanut Popcorn", type: "Vegan | Pescatarian", calories: "854 Calories", ingredients: "10 Ingredients", itemImg: StaticImg },
  { name: "Peanut Butter Cookies", type: "Vegan | Kidney-Friendly", calories: "854 Calories", ingredients: "10 Ingredients", itemImg: StaticImg },
  { name: "Apple Elixir Recipe", type: "Vegan | Vegetarian", calories: "854 Calories", ingredients: "10 Ingredients", itemImg: StaticImg },
  { name: "Apple Cidar Syrup", type: "Vegan | Low-Potassium", calories: "854 Calories", ingredients: "10 Ingredients", itemImg: StaticImg },
  { name: "Double peanut Popcorn", type: "Vegan | Pescatarian", calories: "854 Calories", ingredients: "10 Ingredients", itemImg: StaticImg },
  { name: "Peanut Butter Cookies", type: "Vegan | Kidney-Friendly", calories: "854 Calories", ingredients: "10 Ingredients", itemImg: StaticImg },
];

class HomeScreen extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      FirstLoad: true,
      Data: []
    }
  }
  async componentDidMount() {
    this._isMounted = true;
    var data = await fetchData("vegitarian").then((data)=>{
      if (data === 0) {
        var dummy = []
        recipes.forEach((element) => {
          dummy.push({
            name: element.name,
            type: element.type,
            calories: element.calories,
            ingredients: element.ingredients,
            itemImg: element.itemImg
          });
        });
        this.setState({Data:dummy});
        return dummy
      }
      else {
        var d = []
        data.forEach((value) => {
          d.push({
            name: value.recipe.label,
            type: value.recipe.dishType,
            calories: value.recipe.calories,
            ingredients: value.recipe.ingredients.length,
            itemImg: value.recipe.image
          });
        }
        );
        this.setState({Data:d})
        return d;
      }
    });
    var p=new Promise((resolve)=>{
      setInterval(resolve,6000);
    });
    p.then(()=>{
      this.setState({FirstLoad:false});
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    if (this.state.FirstLoad) {
      return (<SplashScreen></SplashScreen>)
    }
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <SearchComponent />
        </View>
        <FlatList
          numColumns={2}
          data={this.state.Data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (<ListItem recipes={item} />)}>
        </FlatList>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,
    width: Dimensions.get('window').width,
    marginLeft: 2,
    marginRight: 2
  },
});

export default HomeScreen;
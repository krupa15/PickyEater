/**
 * file: HomeScreen.js
 * author: Krupa Patel <kpf097@uregina.ca>
 * version: 0.1
 * date-created: March-28-2022
 * last-modified: April-11-2022
 */
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  Dimensions
} from 'react-native';

import { fetchData } from '../Services/Api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Import necessary files from components
*/
import ListItem from './listItem';
import SearchComponent from './SearchComponent';
import SplashScreen from './SplashScreen';

import { changeData,
         changeRecipe,
         changeSearchString,
         changeFirst,
         changeUrl} from "../store/storeAction";

class HomeScreen extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.handler = this.fetch.bind(this);
  }

  /**
   * fetch
   * Purpose: To fetch the data from API
   * Parameter(s):
   * <1> string : Text entered by user
   * 
   * Preconditions(s):
   * <1> API call must be performed
   * <2> Import Api.js from ./Services
   * 
   * Return(S): N/A  
   * 
   * Side effect(s): Save data in different variable from API which are commented below
   */
  async fetch(string){
    var data = await fetchData(string).then((data)=>{
      if (data === 0) {
        var dummy = []
        recipes.forEach((element) => {
          dummy.push({                           //for dummy data
            name: element.name,                 //save name of recipe
            type: element.type,                 //save type (Dessert, soup etc) of recipe
            calories: element.calories,         //save calories
            ingredients: element.ingredients,   //save ingredients in array format
            itemImg: element.itemImg,           //save image URL
            id:"dummy"
          });
        });
        this.props.changeData(dummy); 
      }
      else {
        var d = []        //temporary array to store data 
        data.forEach((value) => {     //value will work as keyword from search string
          d.push({
            name: value.recipe.label,       //store name of recipe
            type: value.recipe.dishType,    //store type of dish
            calories: Number((value.recipe.calories).toFixed(2)),   //store calories and round up number to 2 after decimal point
            ingredients: value.recipe.ingredients.length,     //Take length of ingredients array
            itemImg: value.recipe.image,      //store url of an image
            id: value.recipe.uri.split("#recipe_")[1]   //Remove 'recipe_' which is appended in ID and store it
          });
        }
        );
        this.props.changeData(d);
      }
    });
  }

  /**
   * componentDidMount
   * Purpose: To show splash screen
   * Parameter(s): N/A
   * 
   * Preconditions(s):
   * <1> SplashScreen.js must be imported
   * 
   * Return(S): N/A  
   * 
   * Side effect(s): Show splashcreen for 4 seconds
   */
  async componentDidMount() {
    this._isMounted = true;
    await this.fetch("vegan");   //load default data while splash screen is showing 
    var p=new Promise((resolve)=>{
      setInterval(resolve,4000);
    });
    p.then(()=>{
      this.props.changeFirst(false);  //set value of firstLoad to false
    });
  }
  componentWillUnmount() {
    this._isMounted = false;  //set value of _isMounted to false again
  }

  render() {
    /** If firstLoad=true then it will return splash screen for 4 seconds */
    if (this.props.store.FirstLoad) {
      return (<SplashScreen></SplashScreen>)
    }
    return (
      <View style={styles.container}>
        <View>
          <SearchComponent handler = {this.handler} />
        </View>
        <View style={styles.flatListContainer}>
        {/** Data in FlatList will be imported from listItem.js */}
        <FlatList
          numColumns={2}
          data={this.props.store.Data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (<ListItem navigation={this.props.navigation} recipes={item} />)}>
        </FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight?StatusBar.currentHeight:45,
    width: Dimensions.get('window').width,
    marginLeft: 2,
    marginRight: 2,
  },
  flatListContainer: {
    marginBottom: 80
  }
});

/**
 * mapStateToProps
 * Purpose: To map properties for states
 * Parameter(s):
 * <1> state: It will provide a state of changes
 * 
 * Preconditions(s):
 * <1> A function call from connect on line no. 118
 * 
 * Return(S): store  
 * 
 * Side effect(s): N/A
 */
const mapStateToProps = (state) => {
  const { store } = state;
  return { store }
};

/**
 * mapDispatchToProps
 * Purpose: To bind redux action to dispatch
 * 
 * Parameter(s):
 * <1> dispatch: bind the value of changes
 * 
 * Preconditions(s):
 * <1> A function call from connect on line no. 118
 * 
 * Return(S): N/A
 * 
 * Side effect(s):
 * <1> Bind values for each parameters
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    changeData,changeSearchString,changeRecipe,changeFirst, changeUrl
  }, dispatch)
);
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
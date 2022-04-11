/**
 * file: Nutrition.js
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

import ListItem from './listItem';
import SearchComponent from './SearchComponent';
import SplashScreen from './SplashScreen';
import { fetchData } from '../Services/Api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
  async fetch(string){
    var data = await fetchData(string).then((data)=>{
      if (data === 0) {
        var dummy = []
        recipes.forEach((element) => {
          dummy.push({
            name: element.name,
            type: element.type,
            calories: element.calories,
            ingredients: element.ingredients,
            itemImg: element.itemImg,
            id:"dummy"
          });
        });
        this.props.changeData(dummy);
        
      }
      else {
        var d = []
        data.forEach((value) => {
          d.push({
            name: value.recipe.label,
            type: value.recipe.dishType,
            calories: Number((value.recipe.calories).toFixed(2)),
            ingredients: value.recipe.ingredients.length,
            itemImg: value.recipe.image,
            id: value.recipe.uri.split("#recipe_")[1]
          });
        }
        );
        this.props.changeData(d);
      }
    });
  }
  async componentDidMount() {
    this._isMounted = true;
    await this.fetch("vegan");
    var p=new Promise((resolve)=>{
      setInterval(resolve,2000);
    });
    p.then(()=>{
      this.props.changeFirst(false);
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    if (this.props.store.FirstLoad) {
      return (<SplashScreen></SplashScreen>)
    }
    return (
      <View style={styles.container}>
        <View>
          <SearchComponent handler = {this.handler} />
        </View>
        <View style={styles.flatListContainer}>
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

const mapStateToProps = (state) => {
  const { store } = state;
  return { store }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    changeData,changeSearchString,changeRecipe,changeFirst, changeUrl
  }, dispatch)
);
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
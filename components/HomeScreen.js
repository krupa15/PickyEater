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
            calories: Number((value.recipe.calories).toFixed(2)),
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
import React, {Component} from 'react';
import { Text,
        View,
        StyleSheet,
        Image,
        Dimensions,
        SafeAreaView,
        TouchableOpacity,
        StatusBar
} from 'react-native';
import * as Linking from 'expo-linking';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HealthLabels from './HealthLabels';
import Ingredients from './Ingredients';
import Nutritions from './Nutritions';
import { fetchRecipeData } from '../Services/Api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeData,
         changeRecipe,
         changeSearchString,
         changeFirst,
         changeSelected,
         changeUrl } from "../store/storeAction";

const Tab = createMaterialTopTabNavigator();

class DetailScreen extends Component {
  _isMounted = false;
  constructor(props){
    super(props);
    
  }
  async componentDidMount() {
    this._isMounted = true;
    var data= await fetchRecipeData(this.props.store.selectedRecipieId);
    if(data ===0){

    }
    else{
      var d={
        name:data.recipe.label,
        ingCount:"",
        totalCal:data.recipe.calories.toFixed(2),
        health:{},
        ing:{},
        nutri:{},
        url:data.recipe.url,
        img:""
      }
      var h=data.recipe.healthLabels;
      
      var hh=[]
      h.forEach(element => {
        hh.push(element);
      });
      d.health=hh;
      var count=0;
      var ing=data.recipe.ingredientLines;
      var inging=[]
      ing.forEach(element => {
        inging.push(element);
        count++;
      });
      d.ing=inging;
      d.ingCount=count;

      var dg= data.recipe.digest;
      var out=[];
      dg.forEach((ele)=>{
        out.push(`${ele.label} : ${ele.total.toFixed(4)} ${ele.unit}`);
      });
      d.nutri=out;
      d.img=data.recipe.image;
      this.props.changeSelected(d);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    console.log(this.props.store.selectedUrl);
    return (
      <SafeAreaView style={styles.fullContainer}>
        <View style={styles.searchSection}>
          <Image style={styles.imgStyle} source={{ uri: this.props.store.selectedUrl }}/>
        </View>
        <View>
          <Text style={styles.nameStyle}> {this.props.store.selectedData.name} </Text>
          <Text style={styles.calIngStyle}> {this.props.store.selectedData.totalCal} Calories | {this.props.store.selectedData.ingCount} Ingredients </Text>
        </View>
        <Tab.Navigator style={styles.tabNavigation} screenOptions={{
          tabBarActiveTintColor: '#10C146',
          tabBarInactiveTintColor: '#ccc',
          }}>
          <Tab.Screen name='Health Label' component={HealthLabels}/>
          <Tab.Screen name='Nutrition' component={Nutritions}/>
          <Tab.Screen name='Ingredients' component={Ingredients}/> 
        </Tab.Navigator>
        <View style={styles.bottomFix}>
          <TouchableOpacity style={styles.bottomBtn} onPress={()=>{
            Linking.openURL(this.props.store.selectedData.url).catch(err => console.error('An error occurred', err));
          }}>
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
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight,
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
const mapStateToProps = (state) => {
  const { store } = state;
  return { store }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    changeData, changeSearchString, changeRecipe, changeFirst,changeSelected, changeUrl
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
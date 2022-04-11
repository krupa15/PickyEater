/**
 * file: DeatailScreen.js
 * author: Krupa Patel <kpf097@uregina.ca>
 * version: 0.1
 * date-created: March-28-2022
 * last-modified: April-11-2022
 */
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
import { fetchRecipeData } from '../Services/Api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Import necessary files from components
*/  
import HealthLabels from './HealthLabels';
import Ingredients from './Ingredients';
import Nutritions from './Nutritions';

import { changeData,
         changeRecipe,
         changeSearchString,
         changeFirst,
         changeSelected,
         changeUrl } from "../store/storeAction";

/**
 * To use TopNavigation bar component
*/  
const Tab = createMaterialTopTabNavigator();

class DetailScreen extends Component {
  _isMounted = false;
  constructor(props){
    super(props); 
  }

  /**
   * componentDidMount
   * Purpose: To fetch the data from API for clicked recipe, health labels, nutritions and Ingredients
   * Parameter(s): N/A
   * 
   * Preconditions(s):
   * <1> API call must be performed
   * <2> Import Api.js from ./Services
   * 
   * Return(S): N/A  
   * 
   * Side effect(s): Save data in different variable from API which are commented below
   */
  async componentDidMount() {
    this._isMounted = true;
    var data= await fetchRecipeData(this.props.store.selectedRecipieId);
    if(data ===0){

    }
    else{
      /** Get relevant data from API */
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
      /** Store values of Health labes in hh to display in Health Labels section */
      var h=data.recipe.healthLabels;
      var hh=[]
      h.forEach(element => {
        hh.push(element);
      });
      d.health=hh;

      /** Store values of Ingredients and also count how many ingredients */
      var count=0;
      var ing=data.recipe.ingredientLines;
      var inging=[]
      ing.forEach(element => {
        inging.push(element);
        count++;
      });
      d.ing=inging;
      d.ingCount=count;

      /** Store values of nutritions from Data source */
      var dg= data.recipe.digest;
      var out=[];
      dg.forEach((ele)=>{
        out.push(`${ele.label} : ${ele.total.toFixed(4)} ${ele.unit}`);
      });
      d.nutri=out;

      /** To change the image URL */
      d.img=data.recipe.image;
      this.props.changeSelected(d);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <SafeAreaView style={styles.fullContainer}>
        <View style={styles.searchSection}>
          <Image style={styles.imgStyle} source={{ uri: this.props.store.selectedUrl }}/>
        </View>
        <View>
          <Text style={styles.nameStyle}> {this.props.store.selectedData.name} </Text>
          <Text style={styles.calIngStyle}> {this.props.store.selectedData.totalCal} Calories | {this.props.store.selectedData.ingCount} Ingredients </Text>
        </View>
        {/** Tab Navigator component */}
        <Tab.Navigator style={styles.tabNavigation} screenOptions={{
          tabBarActiveTintColor: '#10C146',
          tabBarInactiveTintColor: '#ccc',
          }}>
          <Tab.Screen name='Health Label' component={HealthLabels}/>
          <Tab.Screen name='Nutrition' component={Nutritions}/>
          <Tab.Screen name='Ingredients' component={Ingredients}/> 
        </Tab.Navigator>
        <View style={styles.bottomFix}>
          {/** link component to give a web link to button */}
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
    height: 360,
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
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
    changeData, changeSearchString, changeRecipe, changeFirst,changeSelected, changeUrl
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
/**
 * file: listItem.js
 * author: Krupa Patel <kpf097@uregina.ca>
 * version: 0.1
 * date-created: March-28-2022
 * last-modified: April-11-2022
 */
import React, { Component } from 'react';
import { Text,
         View,
         StyleSheet,
         Image,
         TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeData,
         changeRecipe,
         changeSearchString,
         changeFirst,
         changeUrl } from "../store/storeAction";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create({
      listContainer: {
        margin: 6,
        width: '48%',
      },
      itemImg: {
        width: '94%',
        height: 200,
        marginBottom: 5,
        borderRadius: 10
      },
      itemName: {
        fontSize: 14,
        fontWeight: "bold",
        textTransform: 'capitalize'
      },
      itemType: {
        fontSize: 12,
        textTransform: 'capitalize',
        fontWeight: 'bold'
      },
    });
  }
  render() {
    /* Initialize the parameters used in List */
    const { name, type, calories, ingredients, itemImg, id } = this.props.recipes;
    return (
      <View style={this.styles.listContainer}>
        {/**
         * onPress
         * Purpose: Navigate to details screen
         * Parameter(s):
         * <1> changeUrl : Url of clicked recipe on HomeScreen
         * <2> changeRecipe : Pass ID to pass the data of clicked recipe
         * 
         * Preconditions(s):
         * <1> changeUrl must be defined
         * <2> changeRecipe must be defined
         * <3> Initialize parameters 
         * 
         * Return(S): N/A  
         * 
         * Side effect(s): Pass the particular data with ID
         */}
        <TouchableOpacity onPress={() => { this.props.changeUrl(itemImg); this.props.changeRecipe(id); this.props.navigation.navigate("Detail") }}>
          <Image style={this.styles.itemImg} source={{ uri: itemImg }} />
          <Text style={this.styles.itemName}>{name}</Text>
          <Text style={this.styles.itemType}>{type}</Text>
          <Text>{calories} Calories</Text>
          <Text>{ingredients} Ingredients</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

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
    changeData, changeSearchString, changeRecipe, changeFirst, changeUrl
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
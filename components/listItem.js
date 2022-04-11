import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeData, changeRecipe, changeSearchString, changeFirst, changeUrl } from "../store/storeAction";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create({
      listContainer: {
        margin: 5,
        width: '48%'
      },
      itemImg: {
        width: '90%',
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
    const { name, type, calories, ingredients, itemImg, id } = this.props.recipes;
    return (

      <View style={this.styles.listContainer}>
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

const mapStateToProps = (state) => {
  const { store } = state;
  return { store }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    changeData, changeSearchString, changeRecipe, changeFirst, changeUrl
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
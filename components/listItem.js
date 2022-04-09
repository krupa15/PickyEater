import React, {Component} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class ListItem extends Component {
  render() {
    const { name, type, calories, ingredients, itemImg} = this.props.recipes 
  return (
    <View style= {styles.listContainer}>
      <Image style={styles.itemImg} source={{ uri: itemImg ,width:50,height:50}}/>
      <Text style= {styles.itemName}>{ name }</Text>
      <Text style= {styles.itemType}>{ type }</Text>
      <Text>{ calories } Calories</Text>
      <Text>{ ingredients } Ingredients</Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    margin: 5,
    width: '48%',  
  },
  itemImg: {
    width: '95%',
    height: '70%',
    marginBottom: 5
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

export default ListItem;
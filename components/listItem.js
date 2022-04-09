import React, {Component} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class ListItem extends Component {
  render() {
    const { name, type, calories, ingredients, itemImg} = this.props.recipes 
  return (
    <View style= {styles.listContainer}>
      <Image source={{ uri: itemImg ,width:50,height:50}}/>
      <Text style= {styles.itemName}>{ name }</Text>
      <Text style= {styles.itemType}>{ type }</Text>
      <Text style= {styles.itemCalIng}>{ calories }</Text>
      <Text style= {styles.itemCalIng}>{ ingredients }</Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    margin: 5,
    width: '48%',  
  },
  itemName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  itemType: {
    fontSize: 12,
  },
  itemCalIng: {
  }
});

export default ListItem;
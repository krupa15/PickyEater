import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

class ListItem extends React.Component {
  render() {
    const { name, type, calories, ingredients, itemImg} = this.props.recipes 
  return (
    <View style= {styles.listContainer}>
      <Image source={{ uri: itemImg }}/>
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
    fontFamily: "Century Gothic",
    fontWeight: 800,
  },
  itemType: {
    fontSize: 12,
    fontFamily: "Century Gothic",
    fontWeight: 800,
  },
  itemCalIng: {
    fontFamily: "Century Gothic", 
  }
});

export default ListItem;
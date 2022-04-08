import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

class Ingredients extends React.Component {
  render() {
  return (
    <View style= {styles.listContainer}>
      <Text style= {styles.itemName}> Ingredients </Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    margin: 5,  
  },
  itemName: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Ingredients;
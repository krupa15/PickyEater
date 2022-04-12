/**
 * file: Ingredients.js
 * author: Krupa Patel <kpf097@uregina.ca>
 * version: 0.1
 * date-created: April-08-2022
 * last-modified: April-11-2022
 */
import React, { Component } from 'react';
import { View,
         StyleSheet,
         ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeData,
         changeRecipe,
         changeSearchString,
         changeFirst,
         changeSelected } from "../store/storeAction";

class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.tableData = [];
  }
  render() {
    var row = [];
    /** Fetch data of Ingredients when it's clicked on Tab Navigator from DetailScreen.js and stores in row */
    (this.props.store.selectedData.ing.length > 1 ? this.props.store.selectedData.ing : this.tableData).forEach((rowData, index) => {
      row.push(<Row
        data={[rowData]}
        style={styles.rowHeight}
        textStyle={styles.textCustom}
      />)
    });
    return (
      <ScrollView style={styles.container}>
        <View style={styles.tableContainer}>
          {/** Displays the data from array 'row' in render */}
          <Table borderStyle={{ borderWidth: 1, borderColor: '#ebebeb' }}>
            {
              row
            }
          </Table>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  tableContainer: {
    margin: 15,
    marginBottom: 50,
  },
  rowHeight: {
    height: 46,
    backgroundColor: '#d9ffe4'
  },
  textCustom: {
    textAlign: 'center',
    fontSize: 16,
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
    changeData, changeSearchString, changeRecipe, changeFirst, changeSelected
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
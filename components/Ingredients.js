import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeData, changeRecipe, changeSearchString, changeFirst, changeSelected } from "../store/storeAction";
class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 2; j += 1) {
        rowData.push(`${i}${j}`);
      }
      this.tableData.push(rowData);
    }
  }
  render() {
    var row = [];
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
    marginBottom: 50
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
const mapStateToProps = (state) => {
  const { store } = state;
  return { store }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    changeData, changeSearchString, changeRecipe, changeFirst, changeSelected
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
/**
 * file: HealthLabels.js
 * author: Krupa Patel <kpf097@uregina.ca>
 * version: 0.1
 * date-created: April-08-2022
 * last-modified: April-11-2022
 */
import React, {Component} from 'react';
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

class HealthLabels extends Component {
  constructor(props){
    super(props);
    this.tableData = [];
  }
  render() {
   var row=[];
   (this.props.store.selectedData.health.length>1?this.props.store.selectedData.health:this.tableData).forEach((rowData, index) => {
    row.push(<Row
      data={[rowData]}
      style={styles.rowHeight}
      textStyle={styles.textCustom}
    />)
   });
  return (
    <ScrollView style = {styles.container}>
        <View style= {styles.tableContainer}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#ebebeb'}}>
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
    changeData, changeSearchString, changeRecipe, changeFirst,changeSelected
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HealthLabels);
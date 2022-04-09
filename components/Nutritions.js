import React, {Component} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';

class Nutritions extends Component {
  render() {
  const state = this.state;
  const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 2; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }
  return (
    <ScrollView style = {styles.container}>
        <View style= {styles.tableContainer}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#ebebeb'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      style={[styles.rowHeight, index%2 && {backgroundColor: 'white'}]}
                      textStyle={styles.textCustom}
                    />
                  ))
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

export default Nutritions;
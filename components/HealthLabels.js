import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell} from 'react-native-table-component';

class HealthLabels extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        tableHead: ['', 'Head1', 'Head2', 'Head3'],
        tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
        tableData: [
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '3'],
        ['a', 'b', 'c']
        ]
    }
    }
  render() {
  const state = this.state;
  return (
    <View style= {styles.listContainer}>
      <Table borderStyle={{borderWidth: 1}}>
          <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
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

export default HealthLabels;
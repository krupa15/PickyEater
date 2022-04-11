import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  changeData,
  changeRecipe,
  changeSearchString,
  changeFirst
} from "../store/storeAction";

class SearchComponent extends Component {
  render() {
    return (
      <View style={styles.searchSection}>
        <Image style={styles.logo} source={require('./img/logo.png')} /><View style={styles.borderStyle}>
          <TextInput style={styles.inputStyle} onChangeText={(value) => { this.props.changeSearchString(value) }} placeholder="Search here"></TextInput>
        </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={() =>{this.props.handler(this.props.store.searchString)}}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchSection: {
    flexDirection: 'row',
  },
  inputStyle: {
    height: 40,
    width: 250,
    margin: 8,
    borderWidth: 1,
    borderBottomEndRadius: 3,
    borderBottomLeftRadius: 3,
    borderTopEndRadius: 3,
    borderTopLeftRadius: 3,
    borderColor: '#ccc',
    padding: 10,
  },
  logo: {
    width: 60,
    height: 60,
    marginLeft: 5,
  },
  buttonStyle: {
    backgroundColor: '#10C146',
    height: 40,
    marginTop: 8,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    padding: 12,
  }
});
const mapStateToProps = (state) => {
  const { store } = state;
  return { store }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    changeData,changeSearchString,changeRecipe,changeFirst
  }, dispatch)
);

export default connect(mapStateToProps,mapDispatchToProps)(SearchComponent);
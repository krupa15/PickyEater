/**
 * file: SearchComponent.js
 * author: Krupa Patel <kpf097@uregina.ca>
 * version: 0.1
 * date-created: April-07-2022
 * last-modified: April-11-2022
 */
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
          {/**
           * onChangeText
           * Purpose: To store value when text is changed in TextInput
           * Parameter(s):
           * <1> value: Value of entered text
           * 
           * Preconditions(s):
           * <1> changeSearchString must be defined
           * 
           * Return(S): N/A  
           * 
           * Side effect(s): N/A 
           */}
          <TextInput style={styles.inputStyle} onChangeText={(value) => { this.props.changeSearchString(value) }} placeholder="Search here"></TextInput>
        </View>
        {/**
           * onPress
           * Purpose: To store value when text is changed in TextInput
           * Parameter(s):
           * <1> searchString : Text entered by user
           * 
           * Preconditions(s):
           * <1> searchString must be defined
           * <2> handler must be handle values in HomeScreen.js
           * 
           * Return(S): N/A  
           * 
           * Side effect(s): N/A 
           */}
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
    changeData,changeSearchString,changeRecipe,changeFirst
  }, dispatch)
);

export default connect(mapStateToProps,mapDispatchToProps)(SearchComponent);
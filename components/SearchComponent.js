import * as React from 'react';
import { Text,
        TextInput,
        View,
        StyleSheet,
        Image,
        Dimensions,
        ScrollView,
        SafeAreaView,
        TouchableOpacity,
} from 'react-native';

const SearchComponent = () => {
    return (
        <View style={styles.searchSection}>
          <Image style={styles.logo} source={require('./img/logo.png')} />
          <View style={styles.borderStyle}>
            <TextInput style={styles.inputStyle} placeholder="Search here"></TextInput>
          </View>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
    );
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
      width:  60,
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
  
  export default SearchComponent;
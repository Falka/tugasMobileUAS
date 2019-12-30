import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
         <View style={styles.container}>
        <Text onPress={console.log(this.props)} style={styles.judul}>
          REGISTRASI
        </Text>
        <View style={styles.form}>
          <TextInput placeholder="User Name" style={styles.Input} />
          <TextInput placeholder="Email" style={styles.Input} />
          <TextInput placeholder="password" secureTextEntry style={styles.Input} />
          <View style={styles.grButton}>
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={{fontSize: 12, color:"#fff"}}>Simpan !</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16a085',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:40,
    paddingRight:40,
  },

  judul: {
    fontSize: 30,
    color: '#fff',
    
  },

  form: {
    marginTop: 50,
    padding : 10,
    alignSelf : 'stretch'
  },

  Input: {
    alignSelf:'strecth',
    padding:10,
    marginBottom:20,
    backgroundColor: '#fff'
      },

  grButton: {
    flex : 1,
    alignContent : 'space-between'
    // flexBasis: 100,
  },
  btn: {
    alignSelf:'strecth',
    padding:10,
    marginBottom:20,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
  },
});
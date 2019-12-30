import React, { Component } from 'react';
import { Text, View,TouchableOpacity,Image } from 'react-native';


export default class keranjang extends Component {
  render() {
    return (
      <View>
      <Text>cart</Text>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
            <View>
                
                    <Text >balik</Text>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}


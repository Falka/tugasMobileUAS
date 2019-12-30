import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';







export default class App extends React.Component {
  


    
  

  render() {
    return (
      <View style={styles.container}>
     
        <View style={styles.header}>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
            <Image 
              style={styles.headerImage}
              source={require('asset/icon/arrow.png')}
            />
            </TouchableOpacity>
      
          <Text style={styles.headerText}>MarketPlace</Text>
           
          
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorit')}>
            <Image 
              style={styles.headerImage}
              source={require('asset/icon/user.png')}
            />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Pesan')}>
            <Image 
             style={styles.headerImage}
             source={require('asset/icon/pesan.png')}
            />
            </TouchableOpacity>
            
          </View>
        </View>
        
        
        <View style={styles.button}>
                <Button title="Adidas" 
                onPress={()=>this.props.navigation.navigate('')} />
                <Button title="Nike"
                onPress={()=>this.props.navigation.navigate('')} />
            </View>
        
       
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#f5f6fa',
  },

 
  

  header: {
    backgroundColor: '#2980b9',
    flexDirection:'row',
    alignItems: 'center',
    padding: 15,
    justifyContent:'space-between',
    paddingLeft:10,
    paddingRight:10,
    height: 50,
    
  },

button:{
  
        flex: 1,
        alignItems: 'stretch',
        padding: 15,
        justifyContent: 'center',
  
},

  headerText:{
    fontFamily: '',
    paddingTop: 5,
    paddingLeft:5,
  fontSize: 15,
  color:'#ffff', 
  fontWeight: 'BOLD'
  },

  headerImage:{
    width:20,
    height:20,
    alignSelf:'center',
    margin:10,
    marginTop: 10,
  },

 

  

       


});

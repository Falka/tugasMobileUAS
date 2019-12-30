
import * as React from 'react';
import { Button, View, Text, StyleSheet,TextInput,TouchableOpacity, KeyboardAvoidingView, AsyncStorage, } from 'react-native';


export default class Home extends React.Component 
{
  constructor(props){
    super(props);
    this.state ={
      username: '',
      password: '',
  }

  }
  login = () =>{
		 const {username,password} = this.state;
     
		fetch('http://marketfalka.tifuniwa17.com/index.php',{
			method:'POST',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
        
				username: username,
        password: password,
			})
			
		})
		.then((response) => response.json()).then((responseJson)=>{
			 if(responseJson == "ok"){
				 alert("berhasil masuk");
				 this.props.navigation.navigate("Dashboard");
			 }else{
				 alert("silahkan coba lagi");
			 }
		 })
		 .catch((error)=>{
		 console.error('error'+ error);
		 });
		}



  
  render() {
    return (
        <View style={styles.container}>
        <Text onPress={console.log(this.props)} style={styles.judul}>
          MarketPlace
        </Text>
        <View style={styles.form}>
        
          <TextInput 
            placeholder="Username" 
            style={styles.input} 
            onChangeText={(username)=>this.setState({username})} 
             />
          <TextInput 
            placeholder="Password" 
            style={styles.input} 
             onChangeText={(password)=>this.setState({password})} />
          <View style={styles.grButton}>
            <TouchableOpacity 
              style={styles.btn} 
              //onPress={this.login}
              onPress={() => this.props.navigation.navigate('Dashboard')}
              >
              <Text style={{fontSize: 12,color:'#fff'}}>Login !</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.register}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={{fontSize: 12,color:'#000'}}>belum terdaftar?</Text>
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
    backgroundColor: '#2980b9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:40,
    paddingRight:40,
  },

  judul: {
    fontSize: 30,
    color: '#ffff',
    
  },

  form: {
    paddingTop: 50,
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    alignSelf: 'stretch',
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },

  input: {
    alignSelf:'strecth',
    padding:10,
    borderRadius:25, 
    borderWidth: 0.5,
    borderColor: '#d6d7da',
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
    borderRadius:25,
    marginBottom:20,
    backgroundColor: '#44bd32',
    alignItems: 'center',
  },
  register: {
    alignItems: 'center',
    padding:'40',
    color:'#fff'  }
});
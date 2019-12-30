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
import { NavigationActions } from 'react-navigation';
import {sepatu} from './data'



function List({ title, harga, img }) {
  return (
    <View style={styles.item}>
      <Image style={styles.thumb}  source={img} />
      <Text style={styles.jdul}>{title}</Text>
      <Text style={styles.harga}>{harga}</Text>
      <TouchableOpacity>
      <Image
          style={styles.iconcart}
          source={require('asset/icon/shopping-cart.png')}
        />
       </TouchableOpacity>
      
    </View>
  );
}



export default class App extends React.Component {
  

constructor(props) {
  super(props);
  this.state = {
   
    marketlist: [
     {    
        jenis: 'adidas',
        img: require('asset/img/1.jpg'),
        nama: 'YEEZY 1',
        harga: '$500'
      },
      { 
        jenis: 'adidas',
        img: require('asset/img/2.jpg'),
        nama: 'YEEZY 2',
        harga: '$475'
      },
      {
        jenis: 'adidas',
        img: require('asset/img/3.jpg'),
        nama: 'YEEZY 3',
        harga: '$250'
      },
      {
        jenis: 'adidas',
        img: require('asset/img/4.jpg'),
        nama: 'YEEZY 4',
        harga: '$3000'
      },
      {
        
        jenis: 'adidas',  
        img: require('asset/img/1.jpg'),
        nama: 'YEEZY 1',
        harga: '$500'
      },
      {
        jenis: 'adidas',
        img: require('asset/img/2.jpg'),
        nama: 'YEEZY 2',
        harga: '$475'
      },
      {
        jenis: 'adidas',
        img: require('asset/img/3.jpg'),
        nama: 'YEEZY 3',
        harga: '$250'
      },
     {
        jenis: 'nike',
        img: require('asset/img/6.jpg'),
        nama: 'NIKE 6',
        harga: '$300'
      },
      {
        jenis: 'nike',
        img: require('asset/img/7.jpg'),
        nama: 'NIKE 7',
        harga: '$500'
      },
      {
        jenis: 'nike',
        img: require('asset/img/8.jpg'),
        nama: 'NIKE 8',
        harga: '$475'
      },
      {
        jenis: 'nike',
        img: require('asset/img/9.jpg'),
        nama: 'NIKE 9',
        harga: '$250'
      },
      {
        jenis: 'nike',
        img: require('asset/img/11.jpg'),
        nama: 'NIKE 11',
        harga: '$300'
      },
      
    ]
  };
}
    
  logout = () => {
    console.log(this.props);
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
     
        <View style={styles.header}>

        <TouchableOpacity onPress={() => this.logout()}>
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
        
        <View style={styles.srchbar}>
        <TextInput 
            placeholder="Cari Barang..." 
            style={styles.input}  />
        <Image 
             style={styles.headerImage}
             source={require('asset/icon/cari.png')}
             />
       </View>
          <FlatList
            numColumns={2}
            data={this.state.marketlist}
            renderItem={obj => (
              <List img={obj.item.img} title={obj.item.nama} harga={obj.item.harga}  />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
            <View>
              <Image 
             style={styles.footerImage}
             source={require('asset/icon/home.png')}
             />
             <Text style={styles.footerText}> Beranda </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('kategori')}>
            <View>
                <Image 
                    style={styles.footerImage}
                    source={require('asset/icon/list.png')}
                />
                    <Text style={styles.footerText}>Kategori</Text>
            </View>
          </TouchableOpacity>

          

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
            <View>
                <Image 
                    style={styles.footerImage}
                    source={require('asset/icon/bag.png')}
                />
                <Text style={styles.footerText}>Belanja</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Kategori')}>
            <View>
                <Image 
                    style={styles.footerImage}
                    source={require('asset/icon/notification.png')}
                />
                <Text style={styles.footerText}>Notifikasi</Text>
          </View>
          </TouchableOpacity>
          

         
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

  iconcart:{
    height: 25,
    width: 25, 
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

  item: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
 jdul: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'bold',
    textAlign: 'center',
  },
  harga: {
    fontSize: 12,
  },

  thumb: {
    width: 100,
    height: 100,
  },

  
srchbar: {
 flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.3,
    borderColor: '#2980b9',
    height: 40,
    borderRadius: 5,
    margin: 5,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },

  input: {
    flex:1,
    marginLeft: 11,
    // alignSelf:'strecth',
    // padding:10,
    // borderRadius:5, 
    // borderColor:'#44bd32',
    // marginBottom:20,
    // backgroundColor: '#fff',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 0.39,
    // shadowRadius: 8.3,
    // elevation: 13,
      },
       
footer: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:7,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#3498DB',
    height: 50,
  },
    footerImage:{
    width:20,
    height:20,
    alignSelf:'center'
  },
  footerText:{
    color:'white',
    fontSize: 10
  },

});

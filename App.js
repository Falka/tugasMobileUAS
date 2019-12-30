import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import Cart from './cart'
import kategori from './kategori'

const Aplication=  createStackNavigator ({
    Home: Login,
    Register: Register,
    Dashboard: Dashboard,
    Cart: Cart,
    kategori: kategori,
 },
 {
  headerMode : 'none' 
});


export default createAppContainer(Aplication)
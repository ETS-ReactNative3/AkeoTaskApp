/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen'
import AppDrawer from './Drawer'
import LoginScreen from './LoginScreen'
import UserListScreen from './UserListScreen'

const AppStack = createStackNavigator({
  appDrawer: {screen: AppDrawer},
  Home: {screen: HomeScreen, navigationOptions: {
    header:null, //hide header if not needed so whole screen slide  

}},
  Login: {screen: LoginScreen},
  Profile: {screen: ProfileScreen},
  UserList: {screen: UserListScreen},
},{
  navigationOptions: {
    header: null,
  }
});


// const Tabs = createDrawerNavigator({ MainNavigator });

const App = createAppContainer(AppStack);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
} from 'react-native';
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';


/**
* Pages
*/
import Home from './../Page/Home';
import List from './../Page/List';
import Fish from './../Page/Fish';
import Fisher from './../Page/Fisher';
import FishProfile from './../Page/FishProfile';
// import FishPhoto from './Page/FishPhoto';
// import Profile from './Page/Profile';


const TabNavbar =TabNavigator({
  Search:{
    screen:Home,
  },
  Capture:{
    screen:Fish,
  },
},{
  tabBarPosition: 'bottom',
  // tabBarOptions: {
  //     // activeTintColor: '#81B247',
  //     backgroundColor: "#fff",
  //     // showLabel: false,
  //     tabsStyle: {
  //       tabBarBackgroundColor: '#000',
  //       tabBarTranslucent: false,
  //     },
  //
  //   },
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor:'#000',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#fff',
      },
    }
});

const Sidebar = DrawerNavigator({
  Home: {
    screen: TabNavbar,
  },
  Fish: {
    screen: List,
  },
  Fisher: {
    screen: Fisher,
  },
  FishProfile:{
    screen: FishProfile,
  },
},
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'transparent',
        // position:'absolute'
      },
      headerTintColor: '#42b549',
      headerTitleStyle: {
        fontWeight: 'bold',
        color:"#fff",
      },
    },
  }
);

const MainNavbar = StackNavigator({
  Home: {
    title: 'RateFish',
    screen: Sidebar,
  },
},
{
   tabBarPosition: 'bottom',
   // display:'none',
});


const Navbar = Sidebar;

export default Navbar;

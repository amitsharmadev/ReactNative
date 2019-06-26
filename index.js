

import {AppRegistry,View,Text,StyleSheet} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import React, { Component } from 'react';

import Header from './components/header';
import AlbumList from './components/AlbumList';
//import AlbumList from './components/AlbumList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);




AppRegistry.registerComponent(appName, () => App);

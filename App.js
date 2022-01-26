
import React, { Component } from 'react';
import { LogBox } from 'react-native';
import Dashboard from './src/page/Dashboard';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

export default class App extends Component {
  render() {
    return (
   <NavigationContainer>
     <Router />
   </NavigationContainer>
    )
  }
}





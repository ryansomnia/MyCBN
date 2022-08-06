
import React, { Component } from 'react';
import { LogBox } from 'react-native';
import Dashboard from './src/page/Dashboard';

import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreLogs(["EventEmitter.removeListener"]);
LogBox.ignoreLogs([
  "Warning: Failed prop type: Invalid prop `source` supplied to `Image`, expected one of type [number].",
]);
export default class App extends Component {
  render() {
    return (
   <NavigationContainer>
     <Router />
   </NavigationContainer>
    )
  }
}





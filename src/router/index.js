import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../page/Dashboard';
import Menu from '../page/Menu';
import Profile from '../page/Profile';
import Splash from '../page/Splash';
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    
    <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
        <Tab.Screen name="Menu" component={Menu} options={{headerShown: false}} />
        <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}} />
        {/* <Tab.Screen name="Menu" component={Menu} options={{headerShown: false}} /> */}
    </Tab.Navigator>
  );
};



const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/> 
    </Stack.Navigator>
  
  );
};

export default Router;

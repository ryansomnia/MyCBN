import { Text, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export default class Profile extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={{backgroundColor:'red',flex: 0.3}}></View>
      <ScrollView>
        <View style={{flex:1, height:100, flexDirection:'row'}}>
        </View>
        <View style={{backgroundColor: '#F6F2D4', marginBottom: 20}}>
        
        </View>
        </ScrollView>
       
  </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#F6F2D4',
    flex :1,
    flexDirection : 'column',
  }

  })
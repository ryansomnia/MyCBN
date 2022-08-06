import { Text, StyleSheet, View, Image } from 'react-native';
import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Profil } from '../assets';
export default class Profile extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={{flex: 1, alignItems:'center'}}>
          <Image source={Profil}style={{height:200, width:200, backgroundColor:'green', marginTop:40, borderRadius:100}}/>
        </View>
        <View>
      <ScrollView>
        <View style={{flex:1, height:100, flexDirection:'column', alignItems:'center'}}>
        <Text style={{fontSize:30, fontWeight:'bold', color:'black'}}>Heriyanto Sitorus</Text>
        <Text style={{fontSize:20, fontWeight:'400'}}>Disciples</Text>
        </View>
        <View style={{backgroundColor: '#FFF'}}>
        <View>
          <View style={style.textPropertyArea}>
            <Text style={style.textProperty}>Alamat</Text>
            </View>
          <View style={style.textPropertyArea}>
            <Text style={style.textProperty}>No Handphone</Text>
          </View>
          <View style={style.textPropertyArea}>
            <Text style={style.textProperty}>Email</Text>
          </View>
          <View style={style.textPropertyArea}>
            <Text style={style.textProperty}>FAQ</Text>
          </View>
         
        </View>
        </View>
        </ScrollView>
        </View>
       
  </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex :1,
    flexDirection : 'column',
  },
  textPropertyArea: {
    // borderColor: 'black',
    borderWidth:1,
    // backgroundColor: 'gray',
    height:50,
    marginHorizontal:30,
    marginBottom:10,
    borderRadius:10,
    fontWeight:'400'
  },
  textProperty: {
    fontWeight:'400'
  }


  })
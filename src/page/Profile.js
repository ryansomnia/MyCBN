import { Text, StyleSheet, View, Image } from 'react-native';
import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Profil } from '../assets';
export default class Profile extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={{flex: 1, alignItems:'center'}}>
          <Image source={Profil}style={{height:200, width:200, backgroundColor:'green', marginTop:30, borderRadius:100}}/>
        </View>
      <ScrollView>
        <View style={{flex:1, height:100, flexDirection:'column', alignItems:'center', backgroundColor:'blue'}}>
        <Text style={{fontSize:30, fontWeight:'bold', color:'black'}}>Heriyanto Sitorus</Text>
        <Text style={{fontSize:20, fontWeight:'400'}}>Disciples</Text>
        </View>
        <View style={{backgroundColor: '#F6F24'}}>
        <View>
          <View style={{backgroundColor:'red', height:50}}>
            <Text>Alamat</Text>
            </View>
          <View style={{backgroundColor:'blue', height:50}}>
            <Text>No Handphone</Text>
          </View>
          <View style={{backgroundColor:'green', height:50}}>
            <Text>Email</Text>
          </View>
          <View style={{backgroundColor:'grey', height:50}}>
            <Text>FAQ</Text>
          </View>
         
        </View>

{/* alamat
nohp 
email */}
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
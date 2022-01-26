import { Text, StyleSheet, View, ScrollView,Image } from 'react-native';
import React, { Component } from 'react';
import { Profil } from '../assets';

export default class Menu extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.tabText}>MENU</Text>
        
      <ScrollView>
        <Text style={style.headerContent}>EVENT</Text>    
        <ScrollView 
            horizontal 
            pagingEnabled  
            decelerationRate={0} 
            snapToInterval={350+10}
            snapToAlignment='center'>
    
          <View style={style.event}>
              <View style={style.itemEvent}></View>
              <View style={style.itemEvent}></View>
              <View style={style.itemEvent}></View>
              <View style={style.itemEvent}></View>              
          </View>
        </ScrollView>
        <Text style={style.headerContent}>PASTORAL CARE</Text>
        {/* <ScrollView 
            horizontal 
            pagingEnabled  
            decelerationRate={0} 
            snapToInterval={350+10}
            snapToAlignment='center'> */}
    
          <View style={style.pastoralCare}>
              <View style={style.itemPastoral}></View>
              <View style={style.itemPastoral}></View>             
          </View>
        {/* </ScrollView> */}
        <Text style={style.headerContent}>KKA</Text>
        {/* <ScrollView 
            horizontal 
            pagingEnabled  
            decelerationRate={0} 
            snapToInterval={350+10}
            snapToAlignment='center'> */}
    
          <View style={style.pastoralCare}>
              <View style={style.itemPastoral}></View>
              <View style={style.itemPastoral}></View>             
          </View>
        {/* </ScrollView> */}
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
  },
  tabText :{
    marginLeft:21,
    marginVertical:15,
    // backgroundColor:'red',
    fontStyle:'normal',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#000000',
  },
  imageProfile : {
    height:70,
    width:70,
    borderRadius:20,
    marginRight:5,
    marginLeft :20,
    marginVertical:20
  },
  wellcome : {
    height :70,
    marginTop:20,
    padding:0,
    paddingTop: 15
    
  },
  notif:{
    height:40,
    width:40,
    backgroundColor: '#D9534F',
    marginVertical:20,
    marginLeft: 50,
    borderRadius: 50
  },
  texthi: {
    color:'#F6F2D4',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
    dailyVerse: {
      backgroundColor: 'red',
      width:10,
      height:10
    },
    headerContent :{
      marginLeft:21,
      fontStyle:'normal',
      fontSize: 20,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      color: '#000000',
      opacity: 0.7
    },
    event:{
      backgroundColor: '#F6F2D4',
      flexDirection:'row',
      marginBottom:40
    },
    pastoralCare:{
      backgroundColor: '#F6F2D4',
      flexDirection:'row',
      marginBottom:30,
      justifyContent:'center'
    },
    itemEvent:{
    backgroundColor:'#22577E',
    borderRadius:30,
    width:350,
    height:200,
    marginHorizontal:10,
    marginVertical:5
  },
  itemPastoral:{
    backgroundColor:'#22577E',
    borderRadius:30,
    width:167,
    height:141,
    marginHorizontal:10,
    marginVertical:5
  },
    navBar:{
      backgroundColor: 'red',
      width:50,
      height:50
    }

});

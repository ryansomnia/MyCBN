import { Text, StyleSheet, View, Image } from 'react-native';
import React, { Component, useEffect } from 'react';
import { LoginImg } from '../assets';
import { Background } from '@react-navigation/elements';

const Splash = ({ navigation })=> {
  
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('Login');
        }, 3000)

    }, [navigation]);
    
    return (
      <View style={styles.component}>
          <Image source={LoginImg} style={styles.logo}/>
        <Text style={styles.title}>My CBN</Text>
      </View>
    );
  
}

export default Splash
const styles = StyleSheet.create({

component:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FFFFFF'
    },
title:{
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
},
logo:{
    width:123,
    height:123
}

});

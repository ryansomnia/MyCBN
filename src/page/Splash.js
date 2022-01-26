import { Text, StyleSheet, View, Image } from 'react-native';
import React, { Component, useEffect } from 'react';
import { Logo } from '../assets';

const Splash = ({ navigation })=> {
  
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('MainApp');
        }, 3000)

    }, [navigation]);
    
    return (
      <View style={styles.component}>
          <Image source={Logo} style={styles.logo}/>
        <Text style={styles.title}>My CBN</Text>
      </View>
    );
  
}

export default Splash
const styles = StyleSheet.create({

component:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    },
title:{
    fontSize:20
},
logo:{
    width:123,
    height:123
}

});

import { Image, Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import KKA from '../assets'

export default class FormKKA extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'red'}}>
        <Text style={{marginLeft:35, marginTop: 35, fontWeight:'bold', fontSize:25, fontFamily:'Roboto'}}>REGISTER KKA</Text>
        <View style={{marginTop:6, marginHorizontal:35,  backgroundColor:'green'}}>
          <Text style = {{fontWeight:'300',fontSize:10}}>Isi form berikut dengan data dirimu agar bisa masuk ke dalam KKA</Text>
      </View>
      <View>
      <Image source={KKA} style={style.itemKKA}/>    
      </View>

      </View>
    )
  }
}
const style = StyleSheet.create({
  itemKKA:{
    backgroundColor:'#22577E',
    borderRadius:30,
    width:167,
    height:141,
    marginHorizontal:10,
    marginVertical:5
  }

})

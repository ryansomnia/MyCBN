import { Text, StyleSheet, View,  ScrollView } from 'react-native';
import React, { Component } from 'react'

export class Article extends Component {
  render() {
    return (
      <View style={styles.component}>
        <View style={styles.imageContent}>
        </View>
        <View style = {styles.TitleArea}>
          <Text style = {styles.title}>
          Murah Hati
          </Text>
        </View>
        <View style = {styles.dateArea}>
          <Text style = {styles.date}>
          Senin, 13 April 2021
          </Text>
        </View>

        <ScrollView style = {styles.contentArea}>
          <Text style = {styles.contentText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam,
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
             sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
      </View>
    )
  }
}

export default Article
const styles = StyleSheet.create({

  component:{
      flex:1
      },
      imageContent :{
        backgroundColor:'#F6BA3A',
        borderRadius:20,
        marginTop:38,
        alignSelf: 'center',
        height: 229,
        width:360
      },
      TitleArea:{
       width:314,
       marginTop:22,
       marginLeft:30
      },
      title : {
        color:'#000000',
        fontSize: 25,
        fontWeight:'700',
        fontFamily:'roboto'
      },
      dateArea : {
        marginLeft:30
      },
      date:{
        width:314
       },
       contentArea : {
        marginTop: 22,
        marginHorizontal:32
       },
       contentText : {
        color:'#000000',
        fontSize: 17,
        fontWeight:'400',
        fontFamily:'roboto'
      }
      

  });
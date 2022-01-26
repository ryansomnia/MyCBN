import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
  } from 'react-native';
  import { Profil } from '../assets';
  
  
export default class Dashboard extends Component {
    render() {
        return (
            <View style={style.container}>
              <ScrollView>
                <View style={{flex:1, height:100, flexDirection:'row'}}>
                <Image source={Profil}style={style.imageProfile}/>
                    <View style={style.wellcome}>
                      <Text style={{color : '#5584AC',fontSize : 15, fontWeight: '900'}}>Selamat Datang</Text>
                      <Text style={{color : '#142F43', fontSize : 25, fontWeight:'bold' }}>Heriyanto Sitorus</Text>
                    </View>
                    <View style={style.notif}>
                    </View>
                </View>
                <View style={{backgroundColor: '#F6F2D4', marginBottom: 20}}>
                  <View style={{width:342, backgroundColor:'#F6F2D4', marginHorizontal:35}}>
                      <Text style={{fontFamily:'Roboto',color : '#000000',fontSize : 30, fontWeight: '500',opacity:0.6, textAlign:'center',marginTop:27}}>Ayat Perenungan</Text>
                      <Text style={{color : '#000000',fontSize : 15, fontWeight: '400', textAlign:'center',opacity:0.6, marginTop:29}}>Dan sebagian jatuh di tanah yang baik lalu berbuah: ada yang seratus kali lipat, ada yang enam puluh kali lipat, ada yang tiga puluh kali lipat.</Text>
                      <Text style={{color : '#000000',fontSize : 15, fontWeight: '400', textAlign:'center',opacity:0.6, marginTop:10,left:100}}>Matius 13:8</Text>
                  </View>
                </View>
                
                <Text style={style.headerContent}>WARTA JEMAAT</Text>    
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
                <Text style={style.headerContent}>RENUNGAN</Text>
                <ScrollView 
                    horizontal 
                    pagingEnabled  
                    decelerationRate={0} 
                    snapToInterval={350+10}
                    snapToAlignment='center'>
            
                  <View style={style.event}>
                      <View style={style.itemRenungan}></View>
                      <View style={style.itemRenungan}></View>
                      <View style={style.itemRenungan}></View>
                      <View style={style.itemRenungan}></View>              
                  </View>
                </ScrollView>
                {/* <Text style={{}}>Lihat Semua</Text> */}
                </ScrollView>
               
          </View>
        )
    }
}
const style = StyleSheet.create({
    container: {
      backgroundColor: '#F6F2D4',
      flex :1,
      flexDirection : 'column',
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
      // textDecorationStyle: 'solid'
      // textDecorationLine:'none'
      // letterSpacing:5
      },
      // textinput:{
      //   backgroundColor: '#95D1CC',
      //   borderRadius:15,
      //   marginBottom:15,
      //   marginHorizontal:20
      // },
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
      itemEvent:{
      backgroundColor:'#22577E',
      borderRadius:30,
      width:350,
      height:200,
      marginHorizontal:10,
      marginVertical:5
    },
    itemRenungan:{
      backgroundColor:'#22577E',
      borderRadius:30,
      width:200,
      height:150,
      marginHorizontal:10,
      marginVertical:5
    },
      navBar:{
        backgroundColor: 'red',
        width:50,
        height:50
      }


    })
   // 22577E
      // F6F2D4
      // 95D1CC
      // 5584AC
      // #142F43
      // #000000
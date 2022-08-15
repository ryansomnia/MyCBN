import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
  } from 'react-native';
  import syncStorage from 'sync-storage';
  import { Profil } from '../assets';
  import axios from 'axios';
  const api = `http://8.215.37.21:5001`
  TouchableOpacity.defaultProps = { 
    activeOpacity: 0.7
  };
export default class Dashboard extends Component {


constructor(props){
  super(props)
  this.SeeArticle = this.SeeArticle.bind(this);
  this.state = {
    dataArtikel:[],
    dataRenungan:[],
    dataAyat:[]
  }
}


componentDidMount() {
  let user = syncStorage.get("user")
  let config = {
    headers : {
      Authorization : `Bearer ${user.accessToken}`
    }
  }

  axios.get(api+"/cbn/v1/artikel/getAllArticle", config)
  .then(res => {
    this.setState({
      dataArtikel : res.data.data
    })
    console.log(this.state.dataArtikel);
  })
  axios.get(api+"/cbn/v1/artikel/getDataRenungan")
  .then(res => {
    this.setState({
      dataRenungan : res.data.data
    })
  })
  axios.get(api+"/cbn/v1/verse/getVerse")
  .then(res => {
    this.setState({
      dataAyat : res.data.data
    })
  })
}

async SeeArticle() {
  
  this.props.navigation.navigate('Article');
}


    render() {
        return (
          
            <View style={style.container}>
              <ScrollView>
                <View style={{flex:1, flexDirection:'row'}}>
                <Image source={Profil}style={style.imageProfile}/>
                    <View style={style.wellcome}>
                      <Text style={{color : '#5584AC',fontSize : 15, fontWeight: '900'}}>Selamat Datang</Text>
                      <Text style={{color : '#142F43', fontSize : 25, fontWeight:'bold' }}>Heriyanto Sitorus</Text>
                    </View>
                    <View style={style.notif}>
                    </View>
                </View>
                <View style={{marginBottom: 20}}>
                {this.state.dataAyat.map(dataAyat => 
                  <View key={dataAyat} style={{flex:1, marginHorizontal:35}}>
                      <Text style={{fontFamily:'Roboto',color : '#000000',fontSize : 30, fontWeight: '500',opacity:0.6, textAlign:'center',marginTop:27}}>Ayat Perenungan</Text>
                      <Text style={{color : '#000000',fontSize : 15, fontWeight: '400', textAlign:'center',opacity:0.6, marginTop:29}}>{dataAyat.isiAyat}</Text>
                      <Text style={{color : '#000000',fontSize : 15, fontWeight: '400', textAlign:'center',opacity:0.6, marginTop:10,left:100}}>{dataAyat.Kitab} {dataAyat.pasalAyat}</Text>
                  </View>
                )}
                </View>
                
                <Text style={style.headerContent}>WARTA JEMAAT</Text>    
                <ScrollView 
                    horizontal 
                    pagingEnabled  
                    decelerationRate={0} 
                    snapToInterval={350+10}
                    snapToAlignment='center'>
            
                  <View style={style.event}>
                    {this.state.dataArtikel.map(dataArtikel => 
                      <TouchableOpacity key={dataArtikel._id} style={style.itemEvent} onPress={this.SeeArticle}>
                             <Image 
                         style={{width: '100%', height: '100%', borderTopLeftRadius:30, borderTopRightRadius:30}}
                        source={{uri:dataArtikel.url}}/>
                          <View style={{backgroundColor:'#ffffff',width:250,height:50, borderBottomStartRadius:30, borderBottomEndRadius:30}}>
                        <Text style={{marginLeft:10,color:'black', fontFamily: 'Roboto',fontWeight:'bold', fontSize:14}}>{dataArtikel.judulArtikel}</Text>
                        <Text style={{marginLeft:10,color:'black', fontFamily: 'Roboto', fontSize:12}}>{dataArtikel.waktuPembuatan}</Text>
                        </View>
                   
                       
                      </TouchableOpacity> 
                      )}


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
                  {this.state.dataRenungan.map(dataRenungan => 
                      <TouchableOpacity key={dataRenungan._id} style={style.itemRenungan} onPress={this.SeeArticle}>
                      <Image source={{ uri: dataRenungan.url }}/>
                      <View style={{backgroundColor:'#ffffff',width:250,height:40, borderBottomStartRadius:30, borderBottomEndRadius:30}}>
                          <Text style={{marginLeft:20,color:'black', fontFamily: 'Roboto',fontWeight:'bold', fontSize:14}}>{dataRenungan.judulArtikel}</Text>
                          <Text style={{marginLeft:20,color:'black', fontFamily: 'Roboto', fontSize:12}}>{dataRenungan.waktuPembuatan}</Text>
                          </View>
                      </TouchableOpacity>
                  )}
                  </View>
                
                </ScrollView>
                </ScrollView>
               
          </View>
        )
    }
}
const style = StyleSheet.create({
  
    container: {
      backgroundColor: '#fffff',
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
      marginHorizontal: '10%',
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
       flex:1
      },
      headerContent :{
        marginTop:25,
        marginLeft:21,
        fontStyle:'normal',
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#000000',
        opacity: 0.7
      },
      event:{
        flexDirection:'row',
        marginBottom:40  
            
      },
      itemEvent:{
      elevation:25,
      flexDirection:'column',
      backgroundColor:'#22577E',
      borderRadius:30,
      width:250,
      height:200,
      marginHorizontal:10,
      marginVertical:5
    },
    itemRenungan:{
      elevation:25,
      flexDirection:'column-reverse',
      backgroundColor:'#22577E',
      borderRadius:30,
      width:250,
      height:200,
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
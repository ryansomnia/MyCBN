import {Button, StyleSheet, Text, TextInput, View, Alert, Image, ScrollView} from 'react-native';
// import RNPickerSelect from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
// import OptionsMenu from "react-native-option-menu";
import React, {Component, useEffect} from 'react';
import { LoginImg } from '../assets';
import axios from 'axios';
  const api = `http://89.116.228.164:5001`

export default class RegisPage extends Component {

  
    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
        this.LoginPress = this.LoginPress.bind(this);
        this.state = {
          username:'',
          password:'',
          reTypePass:'',
          fullName:'',
          sex:'',
          address:'',
          email:'',
          handphone:'',
          data:[]
        }
      }
    
  handleChangeFullName(textFullName){
      this.setState({
      fullName : textFullName
     })
  }
  handleChangeUsername(textUsername){
    this.setState({
      username : textUsername
    })
  }
  handleChangePassword(textPassword){
    this.setState({
      password : textPassword
    })
  }
  handleChangeRetypePassword(reTypePass){
    this.setState({
      reTypePass : reTypePass
    })
  }
  handleChangeSex(textSex){
    this.setState({
      sex : textSex
    })
  }

  handleChangeAddress(textAddress){
    this.setState({
      address : textAddress
    })
  }
  handleChangeEmail(textEmail){
    this.setState({
      email : textEmail
    })
  }
  handleChangeNoHandphone(textNoHandphone){
    this.setState({
      handphone : textNoHandphone
    })
  }

  async buttonPress() {
    try{
    let response =  await axios.post(api + '/cbn/v1/user/registrasi', {
      username: this.state.username,
      password: this.state.password,
      reTypePass: this.state.reTypePass,
      fullName: this.state.fullName,
      sex: this.state.sex,
      address: this.state.address,
      email: this.state.email,
      handphone: this.state.handphone,
      
    })
    console.log(response.status);
      if (response.status === 200) {
  
        Alert.alert(`Sukses Mendaftar`,
         'Selamat anda sudah berhasil regist silahkan klik login untuk login akun baru',
         )
        this.props.navigation.navigate('Login');
      } else if(response.status.code == 401){
        Alert.alert(`${response.status.message}, ${response.status.error}`)
      }
    }catch(e){
      console.log(e);
      Alert.alert('Isi Field Regist dengan benar !')
    }
  }
  async LoginPress() {
  
        this.props.navigation.navigate('Login');
  }

  render() {
    
    return (
      <View style={styles.container}>
          <ScrollView>
        <View style={styles.imageSection}> 
        <Image source={LoginImg}style={styles.imageLogo}/>
        </View>
       
        
      <View style={styles.Header}>
        
    
        <Text style={styles.title}>Daftar Akun</Text>
        <Text style={styles.subTitle}>
          Selamat datang di My CBN silahkan Daftar terlebih dahulu
        </Text>
      </View>
      <View style={styles.LoginSection}>

      <TextInput
        style={styles.inputLogin}
        placeholder="FullName"
        placeholderTextColor="#000000"
        onChangeText={text => this.handleChangeFullName(text)}
      />
      <View style={{flexDirection:'row'}}>
        <TextInput
        style={{
          height: 40,
          flex:0.5,
          marginVertical: 5,
          marginLeft:5,
          backgroundColor: '#C4C4C4',
          borderRadius:10,
          opacity:0.5,
          color:'#000000',
          padding: 10
        }}
        placeholder="Username"
        placeholderTextColor="#000000"
        onChangeText={text => this.handleChangeUsername(text)}
      />
      {/* <TextInput
          style={{
            height: 40,
            flex:0.22,
            margin: 7,
            backgroundColor: '#C4C4C4',
            borderRadius:10,
            opacity:0.5,
            color:'#000000',
            padding: 10
        }}
        placeholder="Gender"
        placeholderTextColor="#000000"
        onChangeText={text => this.handleChangeSex(text)}
      /> */}
     <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
        {/* <OptionsMenu
  // customButton={myIcon}
  style={{
    height: 40,
    flex:0.22,
    margin: 7,
    backgroundColor: '#C4C4C4',
    borderRadius:10,
    opacity:0.5,
    color:'#000000',
    padding: 10
}}
placeholder="Gender"
  destructiveIndex={1}
  options={["Edit", "Delete", "Cancel"]}
  // actions={[editPost,deletePost]}
  /> */}
      </View>
      <View style={{flexDirection:'row'}}>
       <TextInput
        style={{
          height: 40,
          flex:0.55,
          marginVertical: 5,
          backgroundColor: '#C4C4C4',
          borderRadius:10,
          opacity:0.5,
          color:'#000000',
          padding: 10
        }}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#000000"
        onChangeText={text => this.handleChangePassword(text)}
      />
      <TextInput
         style={{
          height: 40,
          marginVertical: 5,
          marginLeft:5,
          backgroundColor: '#C4C4C4',
          borderRadius:10,
          opacity:0.5,
          color:'#000000',
          padding: 10
        }}
        placeholder="Retype-Password"
        secureTextEntry
        placeholderTextColor="#000000"
        onChangeText={text => this.handleChangeRetypePassword(text)}
      />
      </View>
       <TextInput
        style={styles.inputLogin}
        placeholder="Email"
        placeholderTextColor="#000000"
        onChangeText={text => this.handleChangeEmail(text)}
      />
       <TextInput
        style={styles.inputLogin}
        type='number'
        placeholder="No Handphone"
        placeholderTextColor="#000000"
        onChangeText={text => this.handleChangeNoHandphone(text)}
      />
       <TextInput
        multiline={true}
        numberOfLines={10}
        style={styles.inputLogin}
        // style={{ height:200, textAlignVertical: 'top',}}
        placeholder="Address"
        placeholderTextColor="#000000"
        onChangeText={text => this.handleChangeAddress(text)}
      />
      <TextInput
   
    
    />
      <View style={styles.buttonRegist}>
      <Button
  title="Daftar"
  color="#F6BA3A"
  style={styles.buttonRegist}
  onPress={this.buttonPress}
  
/>
</View >
<Text style={styles.textRegister}>Kamu sudah punya akun? <Text style={styles.textRegisterLink} onPress={this.LoginPress}>Login disini</Text></Text>
      </View>
      </ScrollView>
    </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    flex: 1,

  },
  Header:{
    // backgroundColor:'red',
    flexDirection: 'column',
    // height:100,
    // paddingTop: 50,
    paddingHorizontal: 40,
     marginBottom:20
  },

  imageLogo : {
    alignSelf:'center',
    height:80,
    width:80,
    marginRight:5,
    marginLeft :20,
    marginTop:10,
 
  
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  subTitle: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: 'black'
  },
  textInput: {
    fontSize: 15,
    marginLeft: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: 'black',
  },
  LoginSection:{
      backgroundColor:'#FFFFFF',
      alignItems:'center'
  },
  inputLogin: {
    height: 40,
    width: 300,
    margin: 7,
    backgroundColor: '#C4C4C4',
    borderRadius:10,
    opacity:0.5,
    color:'#000000',
    padding: 10
  },
  buttonRegist: {
    height: 45,
    width: 300,
    margin: 7,
    borderRadius:20
    
  },
  textRegister:{
    fontSize:15,
    color:'#000000'
  },
  textRegisterLink:{
    fontSize:17,
    fontWeight:'bold',
    color:'#000000'
  }
});
  // 22577E
      // F6F2D4
      // 95D1CC
      // 5584AC
      // #142F43
      // #000000
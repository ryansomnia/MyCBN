import {Button, StyleSheet, Text, TextInput, View, Alert, Image, ScrollView} from 'react-native';
import React, {Component, useEffect} from 'react';
import { LoginImg } from '../assets';
import axios from 'axios';
  const api = `http://8.215.37.21:5001`

export default class RegisPage extends Component {

  
    constructor(props) {
        super(props);
        this.LoginPress = this.LoginPress.bind(this);
        this.NextStep = this.NextStep.bind(this);   
        this.state = {
          username:'',
          password:'',
          data:[]
        }
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
  handleChangePassword(textPassword){
    this.setState({
      password : textPassword
    })
  }

 
//   async buttonPress() {
//     try{
//     let response =  await axios.post(api + '/cbn/v1/user/login', {
//       username: this.state.username,
//       password: this.state.password
//     })
//       console.log(response.status);
//       if (response.status == 200) {
//         console.log(response.data);
//         this.props.navigation.navigate('MainApp');
//       } else if(response.status == 401){
//         console.log(response.data);
//         Alert.alert(`${response.data.message}, ${response.data.error}`)
//       }
//     }catch(e){
//       console.log(e);
//       Alert.alert('Password atau Username salah')
//     }
//   }
  async LoginPress() {
  
        this.props.navigation.navigate('Login');
  }
  async NextStep() {
  
    this.props.navigation.navigate('RegistProfile');
}
  NextStep

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
        placeholder="Username"
        placeholderTextColor="#000000"
        onChangeText={text => this.handleChangeUsername(text)}
      />
       <TextInput
        style={styles.inputLogin}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#000000"
        onChangeText={text => this.handleChangePassword(text)}
      />
      <TextInput
        style={styles.inputLogin}
        placeholder="Retype-Password"
        secureTextEntry
        placeholderTextColor="#000000"
        onChangeText={text => this.handleChangeRetypePassword(text)}
      />
       <TextInput
        style={styles.inputLogin}
        placeholder="Email"
        secureTextEntry
        placeholderTextColor="#000000"
        onChangeText={text => this.handleChangeEmail(text)}
      />
       <TextInput
        style={styles.inputLogin}
        type='number'
        placeholder="No Handphone"
        secureTextEntry
        placeholderTextColor="#000000"
        onChangeText={text => this.handleChangeNoHandphone(text)}
      />
      
      <View style={styles.buttonLogin}>
      <Button
  title="Lanjutkan >>"
  color="#F6BA3A"
  style={styles.buttonLogin}
  onPress={this.NextStep}
  
/>
</View >
<Text>Kamu sudah punya akun? <Text style={styles.textRegister} onPress={this.LoginPress}>Login disini</Text></Text>
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
  buttonLogin: {
    height: 45,
    width: 300,
    margin: 7,
    borderRadius:0
    
  },
  textRegister:{
    fontWeight:'bold'
  }
});
  // 22577E
      // F6F2D4
      // 95D1CC
      // 5584AC
      // #142F43
      // #000000
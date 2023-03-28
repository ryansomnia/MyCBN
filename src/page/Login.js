import {Button, StyleSheet, Text, TextInput, View, Alert, Image} from 'react-native';
import React, {Component, useEffect} from 'react';
import { LoginImg } from '../assets';
import axios from 'axios';
  const api = `http://89.116.228.164:5001`
import syncStorage from 'sync-storage';
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.buttonPress = this.buttonPress.bind(this);
    this.registPress = this.registPress.bind(this);
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

 
  async buttonPress() {
    try{
    let response =  await axios.post(api + '/cbn/v1/user/login', {
      username: this.state.username,
      password: this.state.password
    })
      console.log(response.status);
      if (response.status == 200) {
        console.log(response.data);
        syncStorage.set("user",response.data)
        this.props.navigation.navigate('MainApp');
      } else if(response.status == 401){
        console.log(response.data);
        Alert.alert(`${response.data.message}, ${response.data.error}`)
      }
    }catch(e){
      console.log(e);
      Alert.alert('Password atau Username salah')
    }
  }
  async registPress() {
  
        this.props.navigation.navigate('RegisPage');
  }

  render() {
    
    return (
      <View style={styles.container}>
        {/* <View style={styles.imageSection}>  */}
        <Image source={LoginImg}style={styles.imageLogo}/>
        {/* </View> */}
       
        
      <View style={styles.Header}>
        
    
        <Text style={styles.title}>Login</Text>
        {/* <Text style={styles.subTitle}>
          Selamat datang di My CBN silahkan login terlebih dahulu
        </Text> */}
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
      <View style={styles.buttonLogin}>
      <Button
  title="Login"
  color="#F6BA3A"
  style={styles.buttonLogin}
  onPress={this.buttonPress}
  
/>
</View >
      <Text style={styles.textRegister}>Anda belum terdaftar? <Text style={styles.textRegisterLink} onPress={this.registPress}>Daftar akun disini</Text></Text>
      </View>
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
    flexDirection: 'column',
    paddingHorizontal: 40,
     marginBottom:20
  },

  imageLogo : {
    alignSelf:'center',
    height:135,
    width:135,
    marginRight:5,
    marginLeft :20,
    marginTop:120,
 
  
  },
  title: {
    fontSize: 40,
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
      height:250,
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
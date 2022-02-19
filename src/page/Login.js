import {Button, StyleSheet, Text, TextInput, View, Alert} from 'react-native';
import React, {Component, useEffect} from 'react';

import axios from 'axios';
  const api = `http://8.215.37.21:5001`

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.buttonPress = this.buttonPress.bind(this);
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
  render() {
    
    return (
      <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.title}>Shalom !</Text>
        <Text style={styles.subTitle}>
          Selamat datang di My CBN silahkan login terlebih dahulu
        </Text>
      </View>
      <View style={styles.LoginSection}>
      <TextInput
        style={styles.inputLogin}
        placeholder="Username"
        placeholderTextColor="#F6F2D4"
        onChangeText={text => this.handleChangeUsername(text)}
      />
       <TextInput
        style={styles.inputLogin}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#F6F2D4"
        onChangeText={text => this.handleChangePassword(text)}
      />
      <View style={styles.buttonLogin}>
      <Button
  title="Login"
  color="#22577E"
  borderRadius="20"
  onPress={this.buttonPress}
  
/>
</View >
      <Text>hsvs</Text>
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
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    height:150,
    paddingTop: 50,
    paddingHorizontal: 40,
    marginBottom:50
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
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
    backgroundColor: '#22577E',
    borderRadius:10,
    opacity:0.5,
    color:'#FFFFFF',
    padding: 10
  },
  buttonLogin: {
    height: 45,
    width: 300,
    margin: 7,
    backgroundColor: '#FFFFFF',
  }
});
  // 22577E
      // F6F2D4
      // 95D1CC
      // 5584AC
      // #142F43
      // #000000
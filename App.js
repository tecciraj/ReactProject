import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ActivityIndicator, TouchableWithoutFeedback, Button } from 'react-native';
import * as Font from 'expo-font';
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded:false
    }
  }
  async componentDidMount(){
    await Font.loadAsync({
      'Raleway' : require('./assets/fonts/Raleway.ttf'),
    });
    this.setState({
      fontLoaded:true
    });
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeLogo}>
          <Image style={styles.logo} source={require('./assets/logo512.png')} />
        </View>
        <View style={styles.loginTextWrap}>
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputBox} underlineColorAndroid='#000' placeholder="Username"></TextInput>
          <TextInput style={styles.inputBox} underlineColorAndroid='#000' placeholder="Password"></TextInput>
          <View style={styles.loginButton}><Button title='Login' /></View>
          <Text style={styles.signupText}>New User? Create Account</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  welcomeLogo:{
    //backgroundColor:'red',
    flex:3,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  loginTextWrap:{
    flex:1,
    //backgroundColor:'yellow',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  loginText:{
    fontSize:50,
    fontFamily:'Raleway',
  },
  inputWrapper:{
    flex:5,
    //backgroundColor:'blue',
    alignItems:'stretch',
    justifyContent:'flex-start',
  },
  inputBox:{
    //backgroundColor:'grey',
    paddingLeft:10,
    paddingRight:10,
    marginLeft:50,
    marginRight:50,
    marginBottom:20,
    height:50,
    fontSize:20,
  },
  logo:{
    width:200,
    height:200,
    marginTop:50,
  },
  loginButton:{
    marginLeft:50,
    marginRight:50,
  },
  signupText:{
    color:'#000',
    marginTop:70,
    marginLeft:120,
    width:200,
    fontSize:16,
    //backgroundColor:'yellow',
  }
});

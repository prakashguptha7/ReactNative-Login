import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Header,
  Alert
} from 'react-native';

export default class LoginView extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
    }
  }

  onSignIn() {
    const {email, password} = this.state;
  console.log("email",email);
    if (email.length > 0 && password.length > 0) {
      Alert.alert("Alert", `User email is${' '}${email}`);
    }else if(email.length === 0 || email === ''|| email === null){
      Alert.alert("Alert", `You must enter an email address`);
    }else if(password.length === 0 || password === ''|| password === null){
      Alert.alert("Alert", `You must enter a password`);
    }else{
      Alert.alert("Alert", `Something Went Wrong`);
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return ( 
      <View style={styles.container}>
        <Text h2 style={styles.heading}>Login</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://cdn.pixabay.com/photo/2016/01/10/22/52/letters-1132703_960_720.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://cdn.pixabay.com/photo/2012/04/24/23/39/lock-41168_960_720.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight  style={[styles.buttonContainer, styles.loginButton]} onPress={this.onSignIn.bind(this)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  heading:{
   fontSize:20,
   marginBottom:10,
   fontWeight:"bold",
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
 
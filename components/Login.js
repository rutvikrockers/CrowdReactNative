import React from 'react';
import { Platform, TouchableOpacity, Button,StyleSheet, Text, View, TextInput,AsyncStorage,Keyboard } from 'react-native';
import axios from 'axios';
import FormData from 'FormData';


import Form from '../components/Form';
import Logo from '../components/Logo';
export default class Login extends React.Component {

    render() {
        return (
          <View style={styles.container}>
     
            <Form type="Login"/>
              
          </View>
        );
      }

}

// const styles = StyleSheet.create({
//     container: {
//       backgroundColor:'#ffffff',
//       flex : 1,
//       justifyContent: 'center',
//       alignItems: 'center'
      
      
//     }
  
//   });
const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});
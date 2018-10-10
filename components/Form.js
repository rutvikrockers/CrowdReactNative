import React from 'react';
import { Platform, TouchableOpacity, Button,StyleSheet, Text, Image, View, TextInput,AsyncStorage,Keyboard,KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import FormData from 'FormData';

import {Actions} from 'react-native-router-flux';
export default class Form extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={
        email: '',
        password: '',
        
    }
}
    
    async componentDidMount() {
      this._loadInitialState().done();
    axios({
    method:'get',
    url:'http://rockerstech.com/thecrowd/api/login/guest',
    headers: {'fscrwsf-token': 'WQazAUbwfRYu2//yY322bg=='}
    })
    .then((response) => {
    AsyncStorage.setItem('www-token',JSON.stringify(response.data.data.token));
    });
    }

    _loadInitialState =async () => {
      var value = await AsyncStorage.getItem('msg');
      if(value!== null){
          this.props.navigation.navigate('Dashboard');
      }
  }
  dashboard(){
    Actions.dashboard()
  }
    dashboard = async() => {
    
    let guestToken = await AsyncStorage.getItem('www-token');
    let accessGuestToken = JSON.parse(guestToken);
    
    try {
    
    let formData = new FormData();
    formData.append('email', this.state.email);
    formData.append('password', this.state.password);
    
    let response = await fetch("http://rockerstech.com/thecrowd/api/login/user_login",{
    method: 'POST',
    headers: {
    'www-token': accessGuestToken
    },
    body: formData
    })
    .then((response)=> response.json())
   // .then((responseJson)=> alert(responseJson.message))
    .then((responseJson => {
        AsyncStorage.setItem('token',JSON.stringify(responseJson.data.token));
        if ((responseJson.success === true))
        {
            console.log("Response Success....")
            Actions.dashboard()
        }
        else
        {
            console.log("Response Fails....")
            alert(responseJson.message);
        }
    }))
    
    //AsyncStorage.setItem('www-token',JSON.stringify(response.data.token));
    
    .catch((error) => alert(responseJson.message));
    
    }catch(error){
    console.log("Error::",error);
    }
    
    Keyboard.dismiss();
    }
    
    showData = async() => {
    let mytoken = await AsyncStorage.getItem('www-token');
    let d = JSON.parse(mytoken);

    alert(d);
    }
    logoutData = async() => {
    await AsyncStorage.clear();
    }
    
    render() {
    return (
        // <KeyboardAvoidingView behavior="padding">
        // <View style={styles.container}>
         
        //   <TextInput style={styles.inputBox} 
        //       underlineColorAndroid='rgba(0,0,0,0)' 
        //       placeholder="Email"
        //       placeholderTextColor = "#ffffff"
        //       selectionColor="#fff"
        //       keyboardType="email-address"
        //       onSubmitEditing={()=> this.password.focus()}
        //       />
        //   <TextInput style={styles.inputBox} 
        //       underlineColorAndroid='rgba(0,0,0,0)' 
        //       placeholder="Password"
        //       secureTextEntry={true}
        //       placeholderTextColor = "#ffffff"
        //       ref={(input) => this.password = input}
        //       />  
        //    <TouchableOpacity style={styles.button}>
        //      <Text style={styles.buttonText}>{this.props.type}</Text>
        //    </TouchableOpacity>     
  		// </View>
        // </KeyboardAvoidingView> 
     <KeyboardAvoidingView behavior="padding">
      <View style={styles.container}>
        
        
        <Image style={styles.imageStyle} source={require('../assets/appLogo.png')}/>
        {/* <Text style={styles.logoText}>Welcome To The Crowd.</Text> */}

       <TextInput  style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
      placeholder="Email"
      placeholderTextColor = "#ffffff"
      
      //selectionColor= "#000"
      value={this.state.email}
      onChangeText= {(email)=> this.setState({email})}
      keyboardType="email-address"

      onSubmitEditing = {()=> this.password.focus()}/>
      <TextInput  style={styles.inputBox}underlineColorAndroid='rgba(0,0,0,0)'
      placeholder="Password"
      secureTextEntry={true}
      value={this.state.password}
      onChangeText={(password)=> this.setState({password})}
      placeholderTextColor = "#ffffff"
      ref={(input) => this.password = input}/>

      <TouchableOpacity style={styles.button} onPress ={this.dashboard}>
      <Text style={styles.buttonText}>{this.props.type}</Text>
      </TouchableOpacity> 
      </View>
      </KeyboardAvoidingView> 
    );
    }
    }
    
    const styles = StyleSheet.create({
        container : {
          flexGrow: 1,
          justifyContent:'center',
          alignItems: 'center',
          marginVertical : 20
        },
      
        inputBox: {
          width:300,
          height:40,
          backgroundColor:'rgba(255, 255,255,0.2)',
          borderRadius: 25,
          paddingHorizontal:16,
          fontSize:16,
          color:'#ffffff',
          marginVertical: 10,
          
        },
        button: {
          width:300,
          backgroundColor:'#1c313a',
           borderRadius: 25,
            marginVertical: 10,
            paddingVertical: 13
        },
        buttonText: {
          fontSize:16,
          fontWeight:'500',
          color:'#ffffff',
          textAlign:'center'
        },
        logoText : {
            marginVertical: 15,
            fontSize:18,
            color:'rgba(255, 255, 255, 0.7)'
        },
        imageStyle : {
            marginVertical: 25,
            width : 100, 
            height : 100
        }
        
      });

//     const styles = StyleSheet.create({
  
//       container : {
//           flex : 1,
//           backgroundColor: '#ffffff',
//           justifyContent: 'center',
//           alignItems: 'center'
//       },
//       inputBox: {
//           width: 300,
//           height:40,
//           backgroundColor: '#393939',
//           borderRadius: 25,
//           paddingHorizontal:16,
//           fontSize: 16,
//           color: '#ffffff',
//           marginVertical: 10
//       },
  
//        button:{
//            width:300,
//            height: 40,
//             backgroundColor: '#f2d337',
//             borderRadius: 25,
//             marginVertical: 30,
//             paddingVertical:10
//        },
//       buttonText: {
//           fontSize:16,
//           color: '#000000',
//           textAlign: 'center'
//       }
//   });
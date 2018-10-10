import React from 'react';
import { Platform, StyleSheet, Text, View , Image,KeyboardAvoidingView} from 'react-native';

export default class Logo extends React.Component {

    render() {
        return (
           
         <View style={styles.container}>
                
                <Image style={{width : 70, height : 70}} source={require('../assets/appLogo.png')}/>
                <Text style={styles.logoText}>Welcome To The Crowd.</Text>
                
        </View>
        
        );
      }
}

// const styles = StyleSheet.create({
      
//     container : {
//         flexGrow: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
        
//     },
//     logoText: {
//         marginVertical: 10,
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#000000'
//     }
// });

const styles = StyleSheet.create({
    container : {
      //flex: 1,
      justifyContent:'center',
      alignItems: 'center',
      top : 80
    },
    logoText : {
        marginVertical: 15,
        fontSize:18,
        color:'rgba(255, 255, 255, 0.7)'
    }
  });
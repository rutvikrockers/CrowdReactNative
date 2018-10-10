import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Crowdconnect from './Crowdconnect'
export default class App extends React.Component {
  render() {
    return (
       <View style={styles.container}>
           <Crowdconnect/>
      </View>
    );
  }
}
    
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
    
    
//   },
 
// });
const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});
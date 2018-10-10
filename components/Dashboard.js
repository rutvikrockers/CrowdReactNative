import React from 'react';
import { StyleSheet,
    Text,
    View,
    TouchableOpacity,
    AsyncStorage,
    Image,
    Dimensions, ActivityIndicator } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import SwipeCards from 'react-native-swipeable-cards';
import { Video } from 'expo';
import axios from 'axios';
dataSource = [];
export default class Dashboard extends React.Component {

        constructor(){
          super();
          this.state = {
          dataSource: [],
          isLoading: true
          }
      }
      render() {

        const { width } = Dimensions.get('window');
        return (
          <View style={{flex:1}}>
            <CardStack
              style={styles.content}
    
              renderNoMoreCards={() => <Text style={{fontWeight:'700', fontSize:18, color:'gray'}}>No more cards :(</Text>}
              ref={swiper => {
                this.swiper = swiper
              }}
    
              onSwiped={() => console.log('onSwiped')}
              onSwipedLeft={() => console.log('onSwipedLeft')}
            >
              <Card style={[styles.card, styles.videocard]}>
              <Video
                source={{ uri: 'https://thecrowd.storage.googleapis.com/upload/user_pitch_video/pitch_vid_85573_20181003144514.mp4' }}
                      shouldPlay

                resizeMode="cover"
                style={{ width, height: 500 }}
              />
              </Card>
              <Card style={[styles.card, styles.videocard]} onSwipedLeft={() => alert('onSwipedLeft')}>
              <Video
                source={{ uri: 'https://thecrowd.storage.googleapis.com/upload/user_pitch_video/pitch_vid_15588_20181003154032.mp4' }}
                      shouldPlay
                resizeMode="cover"
                style={{ width, height: 500 }}
              />
              </Card>
              <Card style={[styles.card, styles.videocard]}>
                <Video
                  source={{ uri: 'https://thecrowd.storage.googleapis.com/upload/user_pitch_video/pitch_vid_9595_20181003154302.mp4' }}
                        shouldPlay
                  resizeMode="cover"
                  style={{ width, height: 500 }}
                />
              </Card>
              <Card style={[styles.card, styles.videocard]}>
                <Video
                  source={{ uri: 'https://thecrowd.storage.googleapis.com/upload/user_pitch_video/pitch_vid_64838_20181003154700.mp4' }}
                        shouldPlay
                  resizeMode="cover"
                  style={{ width, height: 500 }}
                />
              </Card>
              <Card style={[styles.card, styles.videocard]}>
                <Video
                  source={{ uri: 'https://thecrowd.storage.googleapis.com/upload/user_pitch_video/pitch_vid_3474_20181003155600.mp4' }}
                        shouldPlay
                  resizeMode="cover"
                  style={{ width, height: 500 }}
                />
              </Card>
    
            </CardStack>
    
            <View style={styles.footer}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button,styles.red]} onPress={()=>{
                  this.swiper.swipeLeft();
                }}>
                  <Image source={require('../assets/red.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
                </TouchableOpacity>
              
                <TouchableOpacity style={[styles.button,styles.green]} onPress={()=>{
                  this.swiper.swipeRight();
                }}>
                  <Image source={require('../assets/green.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
                </TouchableOpacity>
              </View>
    
            </View>
          </View>
        );
      }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: 320,
    height: 500,
    backgroundColor: '#FE474C',
    borderRadius: 20,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
    alignItems:'center',
    
  },
  videocard:{
    width: 320,
    height: 500,
    backgroundColor: '#FE474C',
    borderRadius: 20,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
    alignItems:'center',
    overflow: "hidden"
    
  },
  card1: {
    backgroundColor: '#FE474C',
   
  },
  card2: {
    backgroundColor: '#FEB12C',
    
  },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  footer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonContainer:{
    width:220,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  button:{
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    zIndex: 0,
  },
  green:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#01df8a',
  },
  red:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#fd267d',
  }
});
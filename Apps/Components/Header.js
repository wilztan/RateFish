import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
  Dimensions
} from 'react-native';

import Header from './../Components/Header';

type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
      <View style={{width:win.width}} >  
        <Image source={require('./../Assets/img/back.png')} style={style.backgroundImage}/>
        <View style={{position:"absolute",}}>
          <Image source={require('./../Assets/img/ic_launcher.png')} style={style.imagePhoto} />
        </View>
      </View>
    );
  }
}



const win = Dimensions.get('window');
const ratio = win.width/794; //541 is actual image width
const headerRatioHeight = 499 * ratio;

const style = StyleSheet.create({
  container: {
    width:win.width,
    height:win.height /2,
    margin:0,
    padding:0,
  },
  backgroundImage:{
    resizeMode:'cover',
    width:win.width,
    height: headerRatioHeight,
  },
  imagePhoto:{
    resizeMode:'cover',
    alignItems:'center',
    width: 100,
    height:100,
    marginTop: headerRatioHeight -100,
    marginLeft: (win.width - 100)/2,
    borderRadius: 50,
  }
});

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  View
} from 'react-native';


type Props = {};
export default class Splash extends Component<Props> {
  render() {
    const {children} = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('./../Assets/img/ic_launcher.png')} style={{width:150,height:150}}/>
      </View>
    );
  }
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#183545',
    height:win.height,
    width: win.width,
  },
});

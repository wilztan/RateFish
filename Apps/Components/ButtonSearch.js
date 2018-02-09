import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  Button,
  TextInput,
  View
} from 'react-native';

import Header from './../Components/Header';

type Props = {};
export default class ButtonSearch extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      search:'',
    }
    this.handleFetchApi = this.handleFetchApi.bind(this);
  }
  handleFetchApi(){

  }
  render() {
    const {
      onpress,
      title,
    } = this.prop;
    return (
      <Button
        onpress={onPress}
        title={title}
        style={styles.buttonStyle}
      />
    );
  }
}

const win = Dimensions.get('window');
const widthInContainer = win.width - 10;
const styles = StyleSheet.create({
  buttonStyle:{
    color:"#183545",
  },
});

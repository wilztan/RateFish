/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Fisher extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      isLoading:false,
    };
    this.handleWaiting = this.handleWaiting.bind(this);
  }
  handleWaiting(){
    setTimeout(
      ()=>
      {
        this.setState({isLoading:false})
      }
      , 3000
    );
  }
  render() {
    return(
      <Text>asd</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
  Button,
  TextInput,
  Dimensions
} from 'react-native';

import Header from './../Components/Header';


type Props = {};
export default class Home extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      search:'',
    }
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleOnChangeInput(e){
    this.setState({
      search:e.nativeEvent.text,
    });
  }
  handleSubmit(){
    this.props.navigation.navigate('List',
      {
        search: this.state.search,
      }
    );
  }
  render() {
    return (
      <ScrollView style={{width:win.width}}>
        <Header />
        <View style={styles.container}>
            <Text >Search Fish Name</Text>
          <TextInput
            style={styles.TextInput}
            onChange={(e)=>this.handleOnChangeInput(e)}
          />
          <View style={styles.buttonSearch}>
            <Button
              onPress={()=>this.handleSubmit()}
              title="Search"
              color="#183545"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}


const win = Dimensions.get('window');
const ratio = win.width/794; //541 is actual image width
const headerRatioHeight = 499 * ratio;

const styles = StyleSheet.create({
  container:{
    marginTop: 10,
    width:win.width - 10 ,
    marginLeft:5,
    justifyContent:"center",
    alignItems:"center",
  },
  TextInput:{
    width:win.width - 10 ,
    borderColor: "#183545",
  },
  buttonSearch:{
    width: win.width - 10,
  }
});

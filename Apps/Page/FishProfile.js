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
  View,
  Dimensions,
  FlatList,
  TouchableHighlight,
  Image
} from 'react-native';

import Header from './../Components/Header';

type Props = {};
export default class FishProfile extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      isLoading:false,
      market:[],
    };
    this.handleFetchApi = this.handleFetchApi.bind(this);
    this.setItem = this.setItem.bind(this);
  }
  handleFetchApi(){
    // var url = RouteApi.getProductPath();
    // alert(url);
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(result => this.setItem(result))
    .catch(e => alert(e));
  }

  setItem(result){
    this.setState({
      isLoading:false,
      market:result,
    });
    // alert(JSON.stringify(result));
  }
  componentDidMount(){
    this.handleFetchApi();
  }
  render() {
    return(
      <View>
        <Header/>
        <View style={{flexDirection:"row"}}>
          <View style={styles.textHeader}>
            <Text>Anaconda Fish</Text>
            <Text>10000 - 20000</Text>
          </View>
          <View style={styles.imageHeader}>
            <Image
              source={require('./../Assets/img/ikan.png')}
            />
          </View>
        </View>
        <Text>Nearest Location</Text>
        <FlatList
          data={this.state.market}
          renderItem={({item}) =>
            <TouchableHighlight
              onPress={()=>{alert("asd")}}
              >
              <View
                style={styles.listView} >
                <Image
                  source={require('./../Assets/img/ikan.png')}
                  style={{width:win.width * 2/5}}
                  resizeMode="contain"
                />
                <View>
                  <Text>Nama Ikan</Text>
                  <Text  style={{width:win.width * 3/5}} >{item.title}</Text>
                </View>
              </View>
            </TouchableHighlight>
          }
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}


const win = Dimensions.get('window');
const widthInContainer = win.width - 10;

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
  textHeader:{
    width:win.width*3/5
  },
  imageHeader:{
    height:50,
    resizeMode:"contain",
    width:win.width*2/5
  },
  flatListView:{
    width: widthInContainer-10,
    marginLeft:10,
  },
  listView:{
    margin:1,
    backgroundColor:"#dddddd",
    flexDirection:"row",
  }
});

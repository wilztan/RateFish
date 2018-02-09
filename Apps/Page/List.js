import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  Button,
  FlatList,
  TextInput,
  ScrollView,
  TouchableHighlight,
  View
} from 'react-native';

import Header from './../Components/Header';
// import ButtonSearch from './../Components/ButtonSearch';

type Props = {};
export default class List extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      search:'',
      fish:[],
      isLoading:true,
    }
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
      fish:result,
    });
    // alert(JSON.stringify(result));
  }
  handleMovePage(page,param){
      this.props.navigation.navigate(page,
        {
          page: param,
        });
  }
  componentDidMount(){
    this.handleFetchApi();
  }
  render() {

    const { params } = this.props.navigation.state;
    const search = params ? params.search : null;

    return (
      <ScrollView style={styles.container}>
        <Header/>
        <Text>Search Fish Name</Text>
        <View style={styles.searchView}>
          <TextInput style={styles.searchBar}></TextInput>
          <View style={styles.buttonSearch}>
            <Button
              title="search"
              onPress={()=>alert("asd")}
              color="#183545"
              style={{margin:0}}
            />
          </View>
        </View>
        <View
          style={styles.flatListView}
          >
          <FlatList
            data={this.state.fish}
            renderItem={({item}) =>
              <TouchableHighlight
                onPress={()=>{this.handleMovePage("FishProfile","haha")}}
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
      </ScrollView>
    );
  }
}

const win = Dimensions.get('window');
const widthInContainer = win.width - 10;
const styles = StyleSheet.create({
  container:{

  },
  searchView:{
    width: widthInContainer,
    flexDirection:"row",
    marginLeft:5,
  },
  searchBar:{
    width: widthInContainer * 4/5,
  },
  buttonSearch:{
    width: widthInContainer /5,
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

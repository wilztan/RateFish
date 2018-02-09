import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  Button,
  ScrollView,
  TextInput,
  View
} from 'react-native';
var ImagePicker = require('react-native-image-picker');

import Header from './../Components/Header';

type Props = {};
export default class Fish extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      text:"Take Picture or Upload Photo",
      image:require('./../Assets/img/imagenull.png'),
      fishImage:'',
      fishName:"Anaconda Fish",
      page:'',
      url:'http://192.168.43.175/YBLemon/public/api/image/test',
    }
    this.handleBrowseImage = this.handleBrowseImage.bind(this);
    this.handleCaptureImage = this.handleCaptureImage.bind(this);
    this.handlePostData = this.handlePostData.bind(this);
    this.Manageimage = this.Manageimage.bind(this);
    this.sending = this.sending.bind(this);
    this.handleMovePage = this.handleMovePage.bind(this);
  }

  handleBrowseImage() {
    var options = {
      title: 'Select Fish Image',
      // customButtons: [
      //   {name: 'fb', title: 'Choose Photo from Facebook'},
      // ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
   ImagePicker.launchImageLibrary(options, (response) => {
     console.log('Response = ', response);

     if (response.didCancel) {
       console.log('User cancelled image picker');
     }
     else if (response.error) {
       console.log('ImagePicker Error: ', response.error);
     }
     else if (response.customButton) {
       console.log('User tapped custom button: ', response.customButton);
     }
     else {
       let source = { uri: response.uri };
       let data = new FormData();
       // this.handlePostData('http://192.168.1.110/YBLemon/public/api/image/test',source.uri);
       this.setState({
         fishImage: source
       });
     }
   });
  }
  handleCaptureImage() {
   var options = {
     title: 'Select Fish Image',
     // customButtons: [
     //   {name: 'fb', title: 'Choose Photo from Facebook'},
     // ],
     storageOptions: {
       skipBackup: true,
       path: 'images'
     }
   };
   ImagePicker.launchCamera(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      let source = { uri: response.uri };
      let data = new FormData();
      // this.handlePostData('http://192.168.1.110/YBLemon/public/api/image/test',source.uri);
      this.setState({
        fishImage: source
      });
    }
  });
  }
 handlePostData () { //handlePostData (url, fileURI) {
   fileURI = this.state.fishImage.uri;
   url = this.state.url;
    let data = new FormData()
    if (fileURI) {
      data.append('type', 'file')
      data.append('product_img',{type: "image/jpeg", name:"fish", uri:fileURI })
    }
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: data,
    }
    return fetch(url, config)
      .then(response => {
        alert(JSON.stringify(response))
        if(response.status==200){
            this.setState({page:"founded"});
            alert("Sent");
        }

      }).catch(e=>alert(e));
    }

    handleMovePage(){
      this.props.navigation.navigate('FishProfile');
    }

    Manageimage() {
      return (this.state.fishImage=='')?
        <Image source={this.state.image} style={styles.imageStyle} />
      :
        <Image source={this.state.fishImage} style={styles.imageStyle} />
    }

    sending() {
      return (this.state.page=="")?
        <View>
          <View style={{flexDirection:"row"}}>
            <View style={styles.buttonUp} >
              <Button
                style={styles.buttonSearch}
                title="Camera"
                color="#183545"
                onPress={()=>this.handleCaptureImage()}
               />
            </View>
            <View style={styles.buttonUp} >
              <Button
                style={styles.buttonSearch}
                title="Browse"
                color="#183545"
                onPress={()=>this.handleBrowseImage()}
               />
            </View>
          </View>
          <View style={styles.buttonDown}>
            <Button
              title="Upload"
              color="#183545"
              style={styles.buttonSearch}
              onPress={()=>{
                if(this.state.fishImage=="")
                  alert("Please Add Image First");
                else
                  this.handlePostData()
              }}
            />
          </View>
        </View>
      :
        <View>
          <View>
            <Text>{this.state.fishName}</Text>
            <View style={styles.buttonDown}>
              <Button
                title="Market Search"
                color="#183545"
                style={styles.buttonSearch}
                onPress={()=>{
                  this.handleMovePage()
                }}
              />
            </View>
          </View>
        </View>
    }
  render() {

    return (
      <ScrollView>
        <Header />
        <Text>{this.state.text}</Text>
        {this.Manageimage()}
        {this.sending()}
      </ScrollView>
    );
  }
}

const win = Dimensions.get('window');
const widthInContainer = win.width - 10;
const styles = StyleSheet.create({
  imageStyle:{
    width:win.width-10,
    marginLeft:5,
    height: 200,
    resizeMode:"stretch"
  },
  buttonUp:{
    width:(win.width/2)-10,
    margin:5,
  },
  buttonDown:{
    width:win.width - 10,
    margin:5
  },
  buttonSearch:{
    margin:0,
  }
});

import React, { Component } from 'react';
//Import React
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import YouTube from 'react-native-youtube';
import firebase from 'react-native-firebase';
const Banner = firebase.admob.Banner;

const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
const advert = firebase.admob().interstitial('ca-app-pub-1499256017442751/1569720786')


class Screen extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,

      screenType: 'content',
    };
  }
 
  componentDidMount = () => {

    
  }
  
  exitFullScreen = () => {
    alert('Exit full screen');
  };
  
  enterFullScreen = () => {};
  
  onFullScreen = () => {
    if (this.state.screenType == 'content')
      this.setState({ screenType: 'cover' });
    else this.setState({ screenType: 'content' });
  };
  renderToolbar = () => (
    <View>
      <Text> toolbar </Text>
    </View>
  );
  onSeeking = currentTime => this.setState({ currentTime });
 
  render() {
    return (
      <View style={{flex:1}}>
      <ScrollView>
      <View style={{marginTop:20}}>
      <Text style={{textAlign:'center', marginBottom : 10}}> There are around 450 modicare products divided in 8 categories (8 श्रेणियों में विभाजित लगभग 450 मोडिकेयर उत्पाद हैं)</Text>
      <Text style={{textAlign:'center', marginBottom : 10}}> Modicare products are divided into these categories (मोडिकेयर उत्पादों को इन श्रेणियों में विभाजित किया गया है)
{"\n"}{"\n"}Home care Products(होम केयर उत्पाद)
{"\n"}{"\n"}Personal care Products (व्यक्तिगत केयर उत्पाद)
{"\n"}{"\n"}Laundary care Products (लौंड्री देखभाल उत्पाद)
{"\n"}{"\n"}Artificial Jewellary products (कृत्रिम यहूदी उत्पाद)
{"\n"}{"\n"}Food and Beverages Products (खाद्य और पेय उत्पाद)
</Text>
   <Text  style={{marginTop:10, fontSize : 19, textAlign:"center", margin:5 }}>If you want to join modicare, call 7009945933 or whatsApp Adhaar - 8837826904/7009945933 (यदि आप मोडिकेयर में शामिल होना चाहते हैं, तो 700945933 पर कॉल करें या व्हाट्सएप अडार - 8837826904 पर कॉल करेंs)</Text> 
</View>
  <Banner
           style={{alignSelf:'center',marginLeft:0, marginTop:20}}
        size={"SMALL_BANNER"}
      unitId={"ca-app-pub-5671204476259920/8752783607"}
      request={request.build()}
      onAdLoaded={() => {
        console.log('Advert loaded');
      }} />


</ScrollView>
</View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },
});
export default Screen;
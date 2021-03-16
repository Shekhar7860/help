import React, { Component } from 'react';
import {View,Text , TouchableOpacity, ScrollView, Dimensions} from 'react-native'
import YouTube from 'react-native-youtube';
import Carousel from 'react-native-snap-carousel';
import firebase from 'react-native-firebase';
const Banner = firebase.admob.Banner;

const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get("window").width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 100;
export default class Joining extends Component {

  constructor (props) {
   super (props)
  this.state = {
    items : [],
    entries: [
  { title: 'hello' },
  { title: 'world' },
   { title: 'test' },
    { title: 'World' },
],
    }
  }
	
	takeMe = () => {
		alert("hiiii")
	}


componentDidMount = () => {
       firebase.database().ref('/shopping-list').once('value')
     .then((dataSnapshot) => {
   //   alert(';jsjjss')
       let newdata = dataSnapshot.val();
     //  console.log(dataSnapshot)
     if(dataSnapshot.val())
     {
       let items = Object.values(newdata);
       this.arrayholder = items;
       console.log('items', items)
      this.setState({items});
      this.setState({refreshing : false})
     }
       
      }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })

}

_renderItem ({item, index}) {
  console.log('item', item.name)
    return (
      <View style={{height :400, backgroundColor : '#16a085', paddingTop : 10}}>
      <Text style={{color :'white', margin:10}}>Q - {item.itemName}</Text>
          <Text style={{color :'white', marginLeft : 10, marginTop : 5}}>A- {item.name}</Text>
      </View>
  );}
 render () {
		return (<View
			 style={{flex:1, marginTop : 20}}>
       { this.state.items.length !==0 ? <View>
			 <Carousel
       layout={'tinder'} 
        ref={(c) => { this._carousel = c; }}
            data={this.state.items}
            renderItem={this._renderItem}
       sliderWidth={sliderWidth}
        itemWidth={itemWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            autoplay={false}
            snapOnAndroid={true} //to enable snapping on android
            />
            </View> : <View><Text style={{textAlign :'center', fontSize : 20}}>Please Wait</Text></View>
          }
           <Banner
           style={{alignSelf:'center',marginLeft:0, marginTop:20}}
        size={"SMALL_BANNER"}
      unitId={"ca-app-pub-5671204476259920/2711292899"}
      request={request.build()}
      onAdLoaded={() => {
        console.log('Advert loaded');
      }} />
			 	</View>)
	}
}
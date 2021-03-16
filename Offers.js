import React, { Component } from 'react';
import {View,Text , TouchableOpacity, ScrollView} from 'react-native'
import YouTube from 'react-native-youtube';
import firebase from 'react-native-firebase';
const Banner = firebase.admob.Banner;

const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
const advert = firebase.admob().interstitial('ca-app-pub-1499256017442751/1569720786')



export default class Offers extends Component {
	
	  componentDidMount = () => {
    
  }
 render () {
		return (<View
			 style={{flex:1}}>
         
			 <ScrollView>
        			 <Text style={{textAlign:"center", margin:10}}>
 There are several benefits of joining modicare. If you can become a part/modicare, you can get
{"\n"}{"\n"}
1. 10-15 percent of discount on every product (हर उत्पाद पर 10-15 प्रतिशत की छूट)
{"\n"}{"\n"}
2. 3-11 percent of cashback every month (हर महीने 3-11 प्रतिशत कैशबैक)
{"\n"}{"\n"}
3. 10 percent of free product on every 1000 purchase (प्रत्येक 1000 खरीद पर 10 प्रतिशत मुफ्त उत्पाद)
{"\n"}{"\n"}
4. One month of free products after 6 months (6 महीने के बाद मुफ्त उत्पादों का एक महीना)
{"\n"}{"\n"}
5. 25 Days Money Back Guarantee (25 दिन मनी बैक गारंटी)
{"\n"}{"\n"}
6. Chance To Do Our Own Business Without much money (ज्यादा पैसे के बिना अपना खुद का व्यवसाय करने का मौका)
{"\n"}{"\n"}
7. Get your own car, house and travel in foreign countries (विदेशों में अपनी कार, घर और यात्रा करें)</Text>
       
<Text  style={{marginTop:10, fontSize : 19, textAlign:"center", margin:5 }}>If you want to join modicare, call 7009945933 or whatsApp Adhaar - 8837826904/7009945933 (यदि आप मोडिकेयर में शामिल होना चाहते हैं, तो 700945933 पर कॉल करें या व्हाट्सएप अडार - 8837826904 पर कॉल करेंs)</Text> 
 <Banner
		       style={{alignSelf:'center',marginLeft:0, marginTop:20}}
		    size={"SMALL_BANNER"}
		  unitId={"ca-app-pub-5671204476259920/3743999507"}
		  request={request.build()}
		  onAdLoaded={() => {
		    console.log('Advert loaded');
		  }} />

 </ScrollView>
			 	</View>)
	}
}
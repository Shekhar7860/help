import React, { Component } from 'react';
import {View,Text , TouchableOpacity} from 'react-native'
import firebase from 'react-native-firebase';
const Banner = firebase.admob.Banner;

const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
const advert2 = firebase.admob().interstitial('ca-app-pub-5671204476259920/2351026782')


export default class Login extends Component {
	
	takeMe = () => {
		advert2.loadAd(request.build());
    advert2.on('onAdLoaded', () => {
  console.log('Advert ready to show.');
});
setTimeout(() => {
  if (advert2.isLoaded()) {
    advert2.show();
  } else {
  console.log('error occured')
  }
}, 1000)

		this.props.navigation.navigate('Home')
	}
 render () {
		return (<View
			 style={{flex:1}}>
       			  <Text style={{marginTop:10, fontSize : 19, textAlign:"center" }}>Welcome To Modicare Info{"\n"}(आपका स्वागत है Modicare जानकारी के लिए) </Text>
                <Text  style={{marginTop:20, fontSize : 19, textAlign:"center", margin:5 }}>In this app, i have tried to share some extra information about Modicare business (इस ऐप में, मैंने Modicare बिजनेस के बारे में कुछ अतिरिक्त जानकारी साझा करने की कोशिश की है)</Text>
                <Text  style={{marginTop:20, fontSize : 19, textAlign:"center", margin:5 }}> So, click on this button to start knowing about your question and answers about Modicare(तो, अपने प्रश्न और Modicare के बारे में जवाब जानने के लिए इस बटन पर क्लिक करें) </Text>
                <TouchableOpacity onPress={() => this.takeMe()}style={{marginTop : 20, backgroundColor : "#2ecc71", borderRadius : 10, width:"90%", alignSelf :"center", height : 50, justifyContent : "center"}}><Text style={{textAlign :"center", color : "white", fontSize : 20}}>Lets Start (चलो शुरू करते हैं)</Text></TouchableOpacity>
                                                     <Text  style={{marginTop:10, fontSize : 19, textAlign:"center", margin:5 }}>If you want to join modicare, call 7009945933 or whatsApp Adhaar - 8837826904/7009945933 (यदि आप मोडिकेयर में शामिल होना चाहते हैं, तो 700945933 पर कॉल करें या व्हाट्सएप अडार - 8837826904 पर कॉल करेंs)</Text>           
			 	</View>)
	}
}
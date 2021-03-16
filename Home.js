import React, { Component } from 'react';
import {View,Text , TouchableOpacity, Image, Share} from 'react-native'
import firebase from 'react-native-firebase';
const Banner = firebase.admob.Banner;

const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
const advert = firebase.admob().interstitial('ca-app-pub-5671204476259920/1086046571')
const advert2 = firebase.admob().interstitial('ca-app-pub-5671204476259920/4977190128')




export default class Home extends Component {
	constructor(props){
		super(props)
	}
	  static navigationOptions = {
	
    headerRight: () => (
       <TouchableOpacity onPress={()=> Share.share({
      message: 'Checkout Modicare Products - https://play.google.com/store/apps/details?id=com.newadd',
      url: 'https://play.google.com/store/apps/details?id=com.modicareproducts',
      title: 'Start Your Own Business'
    }, {
      // Android only:
      dialogTitle: 'Share the app',
      // iOS only:
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
}>
      <Image style={{tintColor : 'black', height : 25, width : 25, marginRight :10}} source={require('./share.png')}/>
      </TouchableOpacity>
      
    ),
  };

  shareI = () => {
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
      }


    
	takeMe = (value) => {
		 advert.loadAd(request.build());
    advert.on('onAdLoaded', () => {
  console.log('Advert ready to show.');
});
setTimeout(() => {
  if (advert.isLoaded()) {
    advert.show();
  } else {
  console.log('error occured')
  }
}, 1000)
		switch(value) {
  case "j":
    this.props.navigation.navigate("Joining")
    break;
  case "b":
    this.props.navigation.navigate("Benefits")
    break;
    case "s":
    this.props.navigation.navigate("Sponsoring")
    break;
    case "se":
    this.props.navigation.navigate("Seminar")
    break;
    case "p":
    this.props.navigation.navigate("ProductDemos")
    break;
    case "s1":
    this.props.navigation.navigate("Screen1")
    break;
    case "c":
    this.props.navigation.navigate("Complaints")
    break;
    case "o":
    this.props.navigation.navigate("Offers")
    break;
  default:
    this.props.navigation.navigate("Joining")

} 
	
	}

	componentDidMount = () => {
        
	}
 render () {
		return (<View
			 style={{flex:1}}>

			 <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:40}}>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity onPress={() => this.takeMe("j")} style={{width:"40%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Questions{"\n"}(मोडिकेयर प्रश्न)</Text></TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity onPress={() => this.takeMe("b")} style={{width:"40%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Helpline Support{"\n"}(मोडिकेयर हेल्पलाइन सपोर्ट)</Text></TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity  style={{width:"27%", justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}></Text></TouchableOpacity>
			 </TouchableOpacity>


			  <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:30}}>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity onPress={() => this.takeMe("s")} style={{width:"40%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Related Videos{"\n"}(संबंधित वीडियो)</Text></TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity onPress={() => this.takeMe("se")} style={{width:"40%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Levels{"\n"}(मोडिकेयर स्तर)</Text></TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity  style={{width:"27%", justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}></Text></TouchableOpacity>
			 </TouchableOpacity>

			 <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:30}}>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity onPress={() => this.takeMe("p")} style={{width:"40%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Joining{"\n"}(मोडिकारे जुड़ना)</Text></TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity onPress={() => this.takeMe("s1")} style={{width:"40%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Products{"\n"}(Modicare उत्पाद)</Text></TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity  style={{width:"27%", justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}></Text></TouchableOpacity>
			 </TouchableOpacity>

			 <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:30}}>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity onPress={() => this.takeMe("c")} style={{width:"40%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}>Modicare Business Plan{"\n"}(मोदीकेयर बिजनेस प्लान)</Text></TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity onPress={() => this.takeMe("o")} style={{width:"40%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}>Modicare Benefits{"\n"}(न्यूनाधिक लाभ)</Text></TouchableOpacity>
			 <TouchableOpacity style={{width:"40%", justifyContent :"center" }}></TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity style={{width:"27%", justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}></Text></TouchableOpacity>
			 </TouchableOpacity>

			 
			 <Banner
		       style={{alignSelf:'center',marginLeft:0, marginTop:20}}
		    size={"SMALL_BANNER"}
		  unitId={"ca-app-pub-5671204476259920~2600338603"}
		  request={request.build()}
		  onAdLoaded={() => {
		    console.log('Advert loaded');
		  }} />


			 
			


			 	</View>)
	}
}
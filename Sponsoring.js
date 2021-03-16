import React, { Component } from 'react';
import {View,Text , TouchableOpacity, ScrollView} from 'react-native'
import YouTube from 'react-native-youtube';
export default class Sponsoring extends Component {
	
	takeMe = () => {
		alert("hiiii")
	}
 render () {
		return (<View
			 style={{flex:1}}>
			 <ScrollView>
			 <Text style={{textAlign:"center", margin:10}}>Videos can always be a better technique to improve knowledge of modicare. You cab gain more confidence by checking demos of modicare products (वीडियो हमेशा मोडिकेयर के ज्ञान को बेहतर बनाने के लिए एक बेहतर तकनीक हो सकते हैं। आप modicare उत्पादों के डेमो की जाँच करके अधिक आत्मविश्वास प्राप्त करते हैं) </Text>
			  <Text style={{textAlign:"center", margin:10}}>Here are some modicare related videos (यहाँ कुछ संबंधित वीडियो हैं)</Text>
             
			 <View style={{marginTop:10}}>
      <Text style={{textAlign:'center', marginBottom : 10}}>Modicare Presentation by a Leader</Text>
    <YouTube
  videoId="_x74dsnkDbM" // The YouTube video ID
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyAsHjls0gIUcgv_TJ0z8Yx_7wX9xxX4Ewc"
/>
</View>
<View style={{marginTop:10}}>
      <Text style={{textAlign:'center', marginBottom : 10}}>Modicare Products Demo</Text>
    <YouTube
  videoId="slxhm3gr0Jk" // The YouTube video ID
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyBg2DcCsjVMKpyXSRfFcC6RNCJp3iNeqwQ"
/>
</View>

<View style={{marginTop:10}}>
      <Text style={{textAlign:'center', marginBottom : 10}}>Modicare Benefits</Text>
    <YouTube
  videoId="ORbusjZJKa4" // The YouTube video ID
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyDluHy8vwk34XL1wKQK9_J4X6cT-DOERTE"
/>
</View>
<View style={{marginTop:10}}>
      <Text style={{textAlign:'center', marginBottom : 10}}>Modicare General Terms</Text>
    <YouTube
  videoId="xxmxTshVsdM" // The YouTube video ID
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyB2IGYbtz-iTLj1Q0fjGW2uYre6hdAhgmM"
/>
</View>
<View style={{marginTop:10}}>
      <Text style={{textAlign:'center', marginBottom : 10}}>Iron Lady Of Modicare - Surekha Bhargav</Text>
    <YouTube
  videoId="QNtQNHQ-cmQ" // The YouTube video ID
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyByq_EaxQPVTzOBDTok_LP7MQn8OoOBf0k"
/>
</View>
<View style={{marginTop:10}}>
      <Text style={{textAlign:'center', marginBottom : 10}}>Modicare - Nothing Is Impossible</Text>
    <YouTube
  videoId="YVvAI08Gmpc" // The YouTube video ID
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyBEV-Lj5Bt6kRE9ulZLir-lm6b5vXuuxuM"
/>
</View>
 </ScrollView>
			 	</View>)
	}
}
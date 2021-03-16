import React, { Component } from 'react';
import {View,Text , TouchableOpacity, ScrollView} from 'react-native'
import YouTube from 'react-native-youtube';
export default class Benefits extends Component {
	
	takeMe = () => {
		alert("hiiii")
	}
 render () {
		return (<View
			 style={{flex:1}}>
			 <ScrollView>
			 <Text style={{textAlign:"center", margin:10}}>Modicare has provided two resources for helping its consultants and other persons (मोडिकारे ने अपने सलाहकारों और अन्य व्यक्तियों की मदद के लिए दो संसाधन प्रदान किए हैं)</Text>
			  <Text style={{textAlign:"center", margin:10}}>1. You can  call on toll free helpline Number (आप टोल फ्री हेल्पलाइन नंबर पर भी कॉल कर सकते हैं) - 180030012999</Text>
            <Text style={{textAlign:"center", margin:10}}>2. You can  contact on support email id  (आप समर्थन ईमेल आईडी पर संपर्क कर सकते हैं) - support-modicare@modi.com</Text>

                <Text style={{textAlign:"center", margin:10}}>3. Email assistance available on (ईमेल सहायता पर उपलब्ध है)- support-modicare@modi.com</Text>
                 <Text style={{textAlign:"center", margin:10}}>4. For chat service, you can logged into modiare.com and then click on Roshni (For chat service, you can logged into modiare.com and then click on Roshni)</Text>
                                                     <Text  style={{marginTop:10, fontSize : 19, textAlign:"center", margin:5 }}>If you want to join modicare, call 7009945933 or whatsApp Adhaar - 8837826904 (यदि आप मोडिकेयर में शामिल होना चाहते हैं, तो 700945933 पर कॉल करें या व्हाट्सएप अडार - 8837826904 पर कॉल करेंs)</Text>           


			
 </ScrollView>
			 	</View>)
	}
}
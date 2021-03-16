import React, { Component } from 'react';
import {View,Text , TouchableOpacity, ScrollView, Image} from 'react-native'
import firebase from 'react-native-firebase';

export default class Complaints extends Component {
	
	componentDidMount = () => {

  }
 render () {
		return (<View
			 style={{flex:1}}>
<Text style={{marginTop:20, textAlign:"center", margin:5 }}>Modicare business plan is not very difficult (मोडिकेयर बिजनेस प्लान बहुत मुश्किल नहीं है) </Text>
<Text style={{marginTop:10, textAlign:"center", margin:5 }}>There is no rollback i.e once you attain a level, it will be permanent. Your points will always add up and help you in achieving next level</Text>
               <ScrollView>
       <Text style={{textAlign:"center", margin:10}}>In modicare, you will start from consultant and go to Global Black Diamond Director. (मोडिकारे में, आप सलाहकार से शुरू करेंगे और ग्लोबल ब्लैक डायमंड निदेशक के पास जाएंगे।) </Text>
        <Text style={{textAlign:"center", margin:10}}>You can enjoy 7 different types of income in Modicare (आप मोडिकारे में 7 विभिन्न प्रकार की आय का आनंद ले सकते हैं)
{"\n"}{"\n"}
1. Retail Profit (खुदरा लाभ)
{"\n"}{"\n"}
2. Accumulative Performance Bonus (संचयी प्रदर्शन बोनस)
{"\n"}{"\n"}
3. Director Bonus (निदेशक बोनस)
{"\n"}{"\n"}
4. LeaderShip Productivity Bonus (लीडरशिप उत्पादकता बोनस)
{"\n"}{"\n"}
5. Travel Fund (यात्रा निधि)
{"\n"}{"\n"}
6. Car Fund (कार फंड)
{"\n"}{"\n"}
7. House Fund (हाउस फंड)
</Text>
<Image source={require('./plan.png')} style={{height:350, width : 350}}/>
   <Text  style={{marginTop:10, fontSize : 19, textAlign:"center", margin:5 }}>If you want to join modicare, call 7009945933 or whatsApp Adhaar - 8837826904/7009945933 (यदि आप मोडिकेयर में शामिल होना चाहते हैं, तो 700945933 पर कॉल करें या व्हाट्सएप अडार - 8837826904 पर कॉल करेंs)</Text>
               
       <View style={{marginTop:20}}>
      
   </View>
 </ScrollView>

			 	</View>)
	}
}
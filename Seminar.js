import React, { Component } from 'react';
import {View,Text , TouchableOpacity, ScrollView} from 'react-native'
import YouTube from 'react-native-youtube';
import firebase from 'react-native-firebase';



export default class Seminar extends Component {
	
  componentDidMount = () => {
  
    
  }
 render () {
		return (<View
			 style={{flex:1}}>
			 <ScrollView>
			 <Text style={{textAlign:"center", margin:10}}>There are upto 14 levels in Modicare. (मोडिकारे में 14 स्तर तक हैं)</Text>
              <Text style={{textAlign:"center", margin:10}}>At every level, you will get modicare products at same discounted price. You need to pass stages from 7% to 22 % (हर स्तर पर, आपको समान रियायती मूल्य पर मॉडिकेयर उत्पाद मिलेंगे। आपको 7% से 22% तक चरणों को पारित करने की आवश्यकता है )</Text>
              <Text style={{margin:20}}>1. 7% - Consultant{"\n"} 2. 10% - Senior Consultant {"\n"} 3. 13% - 
              Associate Supervisor  {"\n"} 4. 16% - Deputy Supervisor {"\n"} 5. 19% - Deputy Supervisor  {"\n"} 6. 22% - Director
</Text>
              <Text style={{textAlign:"center", margin:10}}>Next, there are higher  director levels and the last one is Global black diamond director (इसके बाद, उच्च स्तर के निदेशक हैं और अंतिम एक ग्लोबल ब्लैक डायमंड निर्देशक हैं)</Text>
                                                          <Text  style={{marginTop:10, fontSize : 19, textAlign:"center", margin:5 }}>If you want to join modicare, call 7009945933 or whatsApp Adhaar - 7009945933/8837826904 (यदि आप मोडिकेयर में शामिल होना चाहते हैं, तो 700945933 पर कॉल करें या व्हाट्सएप अडार - 8837826904 पर कॉल करेंs)</Text>                     



 </ScrollView>
			 	</View>)
	}
}
import React, { Component } from 'react';
import {View,Text , TouchableOpacity, ScrollView, StyleSheet, TextInput, TouchableHighlight} from 'react-native'
import YouTube from 'react-native-youtube';
import firebase from 'react-native-firebase';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const advert2 = firebase.admob().rewarded('ca-app-pub-3372831736678620/1622438828')
const advert = firebase.admob().interstitial('ca-app-pub-3372831736678620/4631745543')
const request = new AdRequest();
request.addKeyword('foobar');

export default class ProductDemos extends Component {
	
  constructor(props){
        super(props);
        this.state = {
         mobile : '',
         name : '', 
         location : ''
        };
       
     }

	takeMe = () => {
		// alert("hiiii")
	}
 render () {
		return (<View
			 style={{flex:1}}>
			 <ScrollView>
			 <View style={styles.content}>

 
                    <View style={styles.messageBox}>
                       
                            <Text style={styles.topText}>Want To Join Modicare?</Text>
                       
                            <Text style={styles.messageBoxBodyText}>Fill Details</Text>
                            <TextInput style={styles.textInputWidth} placeholder="Enter Name" value={this.state.name} onChangeText={(text)=>
                    this.setName(text)}   keyboardType='default'></TextInput>
                    <TextInput style={styles.textInputWidth} placeholder="Enter Mobile" value={this.state.mobile} onChangeText={(text)=>
                    this.setMobile(text)} keyboardType='numeric' maxLength={10}></TextInput>
                     <TextInput style={styles.textInputWidth} placeholder="Enter Location" value={this.state.location} onChangeText={(text)=>
                    this.setLocation(text)} ></TextInput>
                            <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.submit()}>
            <Text style={styles.fullWidthButtonText}>Submit</Text>
            </TouchableHighlight>
            <Text style={styles.messageBoxBodyText2}>If you have any query related to modicare, you can call me 7009945933/7626879728</Text>
                    </View>
                </View>
                <View style={styles.footer}>
         </View>
          <Banner
           style={{alignSelf:'center',marginLeft:0, marginTop:20}}
        size={"SMALL_BANNER"}
      unitId={"ca-app-pub-5671204476259920/6370162846"}
      request={request.build()}
      onAdLoaded={() => {
        console.log('Advert loaded');
      }} />



 </ScrollView>
			 	</View>)
	}
}

const styles = StyleSheet.create({
    toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:20,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1,
        fontSize:20                //Step 3
    },
    mainContainer:{
      flex:1                  //Step 1
  },
  content:{
      backgroundColor:'#ebeef0',
      flex:1                //Step 2
  },
  messageBox:{
    alignItems : 'center',
    width:'100%'
  },
  messageBoxBodyText:{
    margin:10,
    fontSize:18
  },
  messageBoxBodyText2:{
    margin:10,
    fontSize:18,
    fontWeight : 'bold'
  },
  topText:{
    fontSize:25,
    marginTop : 10,
    fontWeight : 'bold'
  },
  topText2:{
    fontSize:20,
    marginTop : 10,
    marginLeft:10
  },
  inputsContainer: {
    flex: 1,
    alignItems : 'center'
  },
  textInputWidth : {
      width : '80%',
      borderWidth:1,
      borderRadius:20,
      marginBottom:10
  }, 
  fullWidthButton: {
    backgroundColor: 'blue',
    height:50,
    width:'80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fullWidthButtonText: {
    fontSize:24,
    color: 'white'
  },
  footer:{
    position:'absolute',
    bottom : 10,
    width : '100%'
  }
  });
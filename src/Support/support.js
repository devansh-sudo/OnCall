// import React from 'react';
// import {
//   SafeAreaView,
//   TextInput,
//   Dimensions,
//   View,
//   Text,
//   StatusBar,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   Animated,
//   KeyboardAvoidingView,
// } from 'react-native';
// import Icons from 'react-native-vector-icons/Entypo';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// import { Assets } from '../assets';
 

// export default class Chat extends React.Component {
//   state = {
//     check: false,
//     data: [{sent: false, text: 'Hello User, We are here to help you.....'}],
//     defaultTxt: undefined,
//   };
//   ShowChat = () => {
//     var len = this.state.data.length;
//     if (len % 2 == 0 && this.state.defaultTxt != '') {
//       setTimeout(() => {
//         if (this.state.data.length == 2) {
//           this.state.data.push({
//             check: !this.state.check,
//             text: 'Can you please elaborate the issue',
//           });
//           this.setState({check: !this.state.check});
//         } else if (this.state.data.length == 4) {
//           this.state.data.push({
//             check: !this.state.check,
//             text: 'Sorry to hear that',
//           });
//           this.setState({check: !this.state.check});
//         } else if (this.state.data.length == 6) {
//           this.state.data.push({
//             check: !this.state.check,
//             text: 'We are reviewing you issue',
//           });
//           this.setState({check: !this.state.check});
//         } else if (this.state.data.length == 8) {
//           this.state.data.push({
//             check: !this.state.check,
//             text:
//               'We have successfully found outs the reason behind your issue',
//           });
//           this.setState({check: !this.state.check});
//         } else if (this.state.data.length == 10) {
//           this.state.data.push({
//             check: !this.state.check,
//             text: 'Just give us some time to resolve your issue',
//           });
//           this.setState({check: !this.state.check});
//         } else {
//           this.state.data.push({
//             check: !this.state.check,
//             text: 'Wait we are still resolving it ',
//           });
//           this.setState({check: !this.state.check});
//         }
//       }, 900);
//     }
//   };
//   storechat = () => {
//     if (this.state.defaultTxt != '') {
//       this.state.data.push({
//         check: !this.state.check,
//         text: this.state.defaultTxt,
//       });
//       this.setState({defaultTxt: undefined, check: !this.state.check});
//     } else {
//       this.setState({defaultTxt: undefined});
//     }
//   };
//   render() {
//     return (
//       <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
   
//    <View style={{flexDirection:'row',  backgroundColor:'#004d40',height:60}}> 
//          <TouchableOpacity onPress={() => this.props.navigation.navigate('Expert')}>
//          <Image style={{height:25,width:25,alignSelf:'center',marginLeft:15,marginTop:15}} source={Assets.back}/>
//          </TouchableOpacity>
      
            
//                   <Text style={{ color: 'white', fontSize: 22, marginTop:10,   marginLeft:20, }}>
//           Chat Us
//         </Text>
       
     

//       </View>
//         <View
//           style={{
//             backgroundColor: '#efefef',
//             flex: 1,
//             justifyContent: 'center',
//           }}>
//           <View
//             style={{
//               height: 16,
//               width: 50,
//               backgroundColor: '#fbfbfb',
//               justifyContent: 'center',
//               alignSelf: 'center',
//               marginTop: 15,
//               borderRadius: 5,
//               elevation: 1.5,
//             }}>
//             <Text
//               style={{
//                 fontSize: 10,
//                 textAlign: 'center',
//                 color: '#a7a7a7',
//               }}>
//               TODAY
//             </Text>
//           </View>

//           <FlatList
//             showsVerticalScrollIndicator={false}
//             data={this.state.data}
//             style={{
//               height: Dimensions.get('window').height / 1.31,
//               paddingHorizontal: 10,
//             }}
//             scrollEnabled={true}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({item}) => (
//               <View
//                 style={[
//                   item.check
//                     ? {
//                         backgroundColor: 'lightblue',
//                         paddingHorizontal: 10,
//                         borderTopEndRadius: 10,
//                         borderTopLeftRadius: 10,
//                         borderBottomLeftRadius: 10,
//                         alignSelf: 'flex-end',
//                       }
//                     : {
//                         backgroundColor: '#fbfbfb',
//                         paddingHorizontal: 10,
//                         borderTopEndRadius: 10,
//                         borderTopLeftRadius: 10,
//                         borderBottomRightRadius: 10,
//                         alignSelf: 'flex-start',
//                       },
//                   {
//                     maxHeight: 500,
//                     minHeight: 0,
//                     flexGrow: 1,
//                     flexShrink: 0,
//                     marginVertical: 10,
//                     width: Dimensions.get('window').width / 1.2,
//                     elevation: 1.5,
//                   },
//                 ]}>
//                 <Text style={{paddingTop: 10}}>{item.text}</Text>
//                 <Text
//                   style={{
//                     fontSize: 10,
//                     paddingVertical: 4,
//                     textAlign: 'right',
//                     color: '#a7a7a7',
//                   }}>
//                   8:00
//                 </Text>
//               </View>
//             )}
//           />
//           <View
//             style={{
//               height: Dimensions.get('window').height / 12,
//               flexDirection: 'row',
//               paddingHorizontal: 10,
//               backgroundColor: 'white',
//               justifyContent: 'space-evenly',
//             }}>
//             <TextInput
//               placeholder="  Type your Message here..."
//               defaultValue={this.state.defaultTxt}
//               onChangeText={(txt) => this.setState({defaultTxt: txt})}
//               onSubmitEditing={() => {
//                 this.storechat(), this.ShowChat();
//               }}
//               placeholderTextColor="#c7cbd1"
//               style={{
//                 width: Dimensions.get('screen').width / 1.25,
//                 borderRadius: 12,
//                 marginLeft: 8,
//                 alignSelf: 'center',
//                 paddingLeft: 10,
//                 borderColor: '#efefef',
//                 borderWidth: 2,
//                 height: '80%',
//               }}
//             />
//             <Icons
//               name={'mic'}
//               color="#c7cbd1"
//               size={30}
//               style={{alignSelf: 'center', marginLeft: 10}}
//             />
//           </View>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';

import { dialogflowConfig } from '../../config';

const BOT_USER = {
  _id: 2,
  name: 'FAQ Bot',
  avatar: 'https://i.imgur.com/7k12EPD.png'
};

class Support extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text: `Hi! I am the Baby bot 🤖 from On Call Veterinary Service.\n\nHow may I help you with today?`,
        createdAt: new Date(),
        user: BOT_USER
      }
    ]
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id
    );
  }

  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  } 

  onSend(messages = []) {

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));

    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  }
}

export default Support;
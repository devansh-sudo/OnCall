import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StatusBar,
  FlatList,
  ImageBackground,
  StyleSheet,
  Alert,
  FastImage,
  ScrollView,
} from 'react-native';
import { Assets } from '../assets';
 

 
 

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }
  render() {
    return (
      <View  >
          
          <View style={{flexDirection:'row',  backgroundColor:'#004d40',height:60}}> 
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
         <Image style={{height:25,width:25,alignSelf:'center',marginLeft:15,marginTop:15}} source={Assets.back}/>
         </TouchableOpacity>
      
            
                  <Text style={{ color: 'white', fontSize: 22, marginTop:10,   marginLeft:20, }}>
                  Previous Chats
        </Text>
        
     

      </View>
      <Text style={{fontSize:22,marginTop:20, alignSelf:'center'}}>You Don't Have Previous Chats</Text>
 

     
       
        
      </View>
    );
  }
  


}

 
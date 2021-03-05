import { Container } from 'native-base';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    StatusBar,
    Image,
} from 'react-native';
import { Assets } from '../assets/index';

export default class Verifyotp extends React.Component {
    state = {
        email: '',
        password: ''
     }
     handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }
     login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
     }
    render() {
        return (
            <Container
                style={{
                    backgroundColor: 'white',
                    width: '100%',
                    resizeMode: 'contain',
                }}>
                <StatusBar backgroundColor="#004d40" barStyle="light-content" />
                <View style={{ backgroundColor: '#fff' }}>
                <View
        style={{
          position: 'absolute',
          marginTop:0,
          left: 0,
          height:60,
          right: 0,
          backgroundColor:'#004d40',
          alignItems: 'center',
        }}>
            <Text style={{ color: 'white', fontSize: 22, marginTop:10 }}>
          On-Call Veterinary service system
        </Text>
      </View>
      <View>

      <View
        style={{
          
          top: 0,
          left: 0,
          right: 0,
          bottom: 20,
          marginTop:110,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{ height: 150, width: 150, alignSelf: 'center' }}
          source={Assets.logo}
        />
        </View>
        <Text style = {{color:'black',textAlign:'center',marginTop:30,fontSize:16,marginHorizontal:40}}>
           Enter OTP</Text>
      <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Your OTP"
               placeholderTextColor = "grey"
               
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
 
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MyTabs')}
               style = {styles.submitButton}>
               
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
 

            
            
               <View style={{flexDirection:'row',marginTop:210,paddingLeft:10}}>
               <Image
          style={{ height: 40, width: 40  }}
          source={Assets.logo}
        />
         <Text style = {{color:'black',textAlign:'center',marginTop:10,fontSize:14,marginLeft:10}}>ICAR - IVRI Izatnagar Bareilly</Text>
               </View>
               </View>

                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       paddingTop: 20
    },
    input: {
        borderRadius:10,
       margin: 15,
       height: 50,
       borderColor: '#000',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#004d40',
       padding: 10,
       margin: 15,
       height: 50,  borderRadius:10,
    },
    submitButtonText:{
        top:3,
        fontSize:16,
        alignSelf:'center',
       color: 'white',
     
    }
 })

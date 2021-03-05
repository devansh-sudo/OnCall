import { Container } from 'native-base';
import React, { useState } from 'react';
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
    Alert 
} from 'react-native';
import { Assets } from '../assets/index';
import {
   registerUrl,
 
 } from '../config/config';
 import Axios from 'axios';

 import {toast} from '../Function/Function';
import { ScrollView } from 'react-native-gesture-handler';
var Querystringified = require('querystringify');


export default class Login extends React.Component {
  constructor(props) {
    super(props)
 
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }
  
  registration_Function = () => {
 
    fetch('http://172.16.23.65:8004/UserApp/signup.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
 
        user_name: this.state.name,
 
        user_email: this.state.email,
 
        user_password: this.state.password
 
      })
 
    }).then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
 
 
  }

    // registerUser=()=>{
    //   var name=this.state.name;
    //   var email=this.state.email;
    //   var password=this.state.password;
    //   var mobile=this.state.mobile;
    //   var address=this.state.address;

    //   if (name.length==0 || email.length==0){alert('fill all details') }  
    //   else{
    // var registerUrl="http://172.16.23.173:8004/UserApp/register.php"
    // var headers={
    //   'Accept':'application/json',
    //   'Content-Type':'application.json'
    // };
    // var Data={
    //   name:name,
    //   email:email,
    //   password:password,
    //   mobile:mobile,
    //   address:address
    // };
    // fetch(registerUrl,{
    //   method:'POST',
    //   headers:headers,
    //   body:Querystringified.stringify(Data)
      
    // },console.log('resp',registerUrl))
    // .then((response)=>response.Querystringified)
    
    // .then((response)=>
    // {
    //   alert(response[0],'submit')
    // })
    // .catch((error)=>{
    //   alert('error'+error);
    // })
    // }


    // }
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
                  
     <ScrollView> 
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


      <View style = {styles.container}>
            
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "grey"
               onChangeText={data => this.setState({ name: data })}
                             //  onChangeText= {name=>this.setState({name})}
               autoCapitalize = "none"
               />
                <TextInput style = {styles.input}
                 keyboardType={'email-address'}                  
                // onChangeText= {email=>this.setState({email})}
                onChangeText={data => this.setState({ email: data })}

                underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "grey"
               
               autoCapitalize = "none"
                />
            
            <TextInput style = {styles.input}
              //  onChangeText= {password=>this.setState({password})}
              onChangeText={data => this.setState({ password: data })}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               secureTextEntry={true}
               placeholderTextColor = "grey"
               
               autoCapitalize = "none"
              />

            <TextInput style = {styles.input}
               keyboardType={'number-pad'}
               maxLength={10}
               onChangeText= {mobile=>this.setState({mobile})}
               underlineColorAndroid = "transparent"
               placeholder = "Mobile"
               placeholderTextColor = "grey"               
               autoCapitalize = "none"
               />
                <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Address"
               placeholderTextColor = "grey"
               onChangeText= {address=>this.setState({address})}
               autoCapitalize = "none"
                />

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Location"
               placeholderTextColor = "grey"
               
               autoCapitalize = "none"
               />
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress={this.registration_Function}
              //  onPress={ this.registerUser}
               >
               <Text style = {styles.submitButtonText}> REGISTER </Text>
            </TouchableOpacity>
         </View>
         </ScrollView>
         <View style={{flexDirection:'row',alignSelf:'center',marginTop:20}}>
               <Text style = {{color:'black',textAlign:'center',marginTop:10,fontSize:14}}> Already have account ?</Text>
               <TouchableOpacity  onPress={() => this.props.navigation.navigate('Login')}
                >            
               <Text style = {{color:'black' ,marginTop:10,color:'#004d40'}}> LOG IN   </Text>
            </TouchableOpacity>
               </View>
               <View style={{flexDirection:'row',marginTop:50,paddingLeft:10}}>
               <Image
          style={{ height: 40, width: 40  }}
          source={Assets.logo}
        />
         <Text style = {{color:'black',textAlign:'center',marginTop:10,fontSize:14,marginLeft:10}}>ICAR - IVRI Izatnagar Bareilly</Text>
               </View>

                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:6,
       paddingTop: 70
    },
    input: {
        borderRadius:10,
       margin: 10,
       height: 45,
       borderColor: '#000',
       borderWidth: 0.5
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

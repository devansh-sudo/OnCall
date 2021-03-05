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
import Axios from 'axios';
 
import {
  Ivriurl,
 
} from '../config/config';
import {toast} from '../Function/Function';
import AsyncStorage from '@react-native-community/async-storage';
var Querystringified = require('querystringify');

export default class Login extends React.Component {
   
  static navigationOptions= ({navigation}) =>({
    title: 'Login',	
    headerRight:	
    <TouchableOpacity
    onPress={() => navigation.navigate('Home')}
    style={{margin:10,backgroundColor:'orange',padding:10}}>
    <Text style={{color:'#ffffff'}}>Home</Text>
    </TouchableOpacity>
  
});  
constructor(props){
  super(props)
  this.state={
    email:'',
    password:'',
    isLoading: false,
  }
}

validateUser = async () => {
  if (this.state.email !== '' && this.state.password !== '') {
    this.setState({isLoading: false});
    var url = Ivriurl + 'UserApp/login.php'

    var body = {
      email: this.state.email,
      password: this.state.password,
      
    };
    let data_res = Querystringified.stringify(body);
    console.log('Body for url------------>', data_res);

    await Axios.post(url, data_res, {
      headers: {
        'Accept': 'application/json',
           'Content-type': 'application/json'
      },
    })
      .then((response) => {
        console.log('response from login is', response);
        this.setState({isLoading: false});
        
        this.props.navigation.navigate('MyTabs');
      }) 
      .catch((err) => {
        console.log('Catch error', JSON.stringify(err));
        this.setState({isLoading: false});
        toast('Email is not registered');
      });
  } else {
    this.setState({isLoading: false});
  }
};

// login = () =>{
//   const {email,password} = this.state;
//   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
//   if(email==""){
//     //alert("Please enter Email address");
//     this.setState({email:'Please enter Email address'})
    
//   }
  
//   else if(reg.test(email) === false)
//   {
//   //alert("Email is Not Correct");
//   this.setState({email:'Email is Not Correct'})
//   return false;
//     }

//   else if(password==""){
//   this.setState({email:'Please enter password'})
//   }
//   else{
  
//   fetch('http://172.16.23.173:8004/UserApp/login.php',{
//     method:'post',
//     header:{
//       'Accept': 'application/json',
//       'Content-type': 'application/json'
//     },
//     body:JSON.stringify({
//       // we will pass our input data to server
//       email: email,
//       password: password
//     })
    
//   })
//   .then((response) => response.json())
//    .then((responseJson)=>{
//      if(responseJson == "ok"){
//        // redirect to profile page
//        alert("Successfully Login");
//        this.props.navigation.navigate("MyTabs");
//      }else{
//        alert("Wrong Login Details");
//      }
//    })
//    .catch((error)=>{
//    console.error(error);
//    });
//   }
  
  
 
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

      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 340,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{ height: 150, width: 150, alignSelf: 'center' }}
          source={Assets.logo}
        />
        </View>

      <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"   
               placeholderTextColor = "grey"
               
               autoCapitalize = "none"
               
               onChangeText={email => this.setState({email})}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "grey"              
               autoCapitalize = "none"
               secureTextEntry={true}
               onChangeText={password => this.setState({password})}/>
            
            {this.state.email==='' || this.state.password==='' ? <TouchableOpacity
               style = {{    backgroundColor: '#e6e6e6',
               padding: 10,
               margin: 15,
              borderWidth:1,
              borderColor:'#e6e6e6',
               height: 50,  borderRadius:10,}}
               onPress={this.validateUser}>
               <Text style = {{   top:3,
        fontSize:16,
        alignSelf:'center',
       color: 'black'}}> LOG IN </Text>
            </TouchableOpacity>
            :<TouchableOpacity
               style = {styles.submitButton}
               onPress={() => this.props.navigation.navigate('MyTabs')}
              //  onPress={this.validateUser}
               >
               <Text style = {styles.submitButtonText
     }> LOG IN </Text>
            </TouchableOpacity>}
         </View>

         <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgotpass')}
                >
              
               <Text style = {{color:'black',textAlign:'right',marginTop:10,marginRight:10}}> Forgot Password ?  </Text>
            </TouchableOpacity>

            
              <View style={{flexDirection:'row',alignSelf:'center',marginTop:20}}>
               <Text style = {{color:'black',textAlign:'center',marginTop:10,fontSize:14}}> Don't have account ?</Text>
               <TouchableOpacity  onPress={() => this.props.navigation.navigate('Signup')}
                >
              
               <Text style = {{color:'black' ,marginTop:10,color:'#004d40'}}> SIGNUP   </Text>
            </TouchableOpacity>
               </View>

               <View style={{flexDirection:'row',marginTop:90,paddingLeft:10}}>
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
       paddingTop: 300
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


import React from 'react';
import { View, StyleSheet, Dimensions,Container,StatusBar,
Text,Picker ,Image,TouchableHighlight,Alert,
TouchableOpacity,Title,Caption,Drawer,Avatar } from 'react-native';
import { Assets } from '../assets/index';

export default class Home extends React.Component {
  state ={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://172.16.23.171/:4548/problem');
    const users = await response.json();
    this.setState({data: users});

  }
componentDidMount(){
  this.fetchData();
}
  state = {user: ''}
  updateUser = (user) => {
     this.setState({ user: user })
  }
    
    render() {
        return (
     <View>
    <StatusBar backgroundColor="#004d40" barStyle="light-content" />
    <View style={[styles.scene, { backgroundColor: '#fff' }]} />
    <Text style={{fontSize:22,fontWeight:'bold',alignSelf:'center',marginTop:15}}>Diagnose the problem in Animal</Text>
    <Text style={{fontSize:20,fontWeight:'bold' ,marginTop:25,marginLeft:16,color:'#26a69a'}}>Select Species</Text>
      <View style={{ width: '90%',alignSelf:'center'  ,borderWidth:1,borderRadius:10,marginTop:20 }}>
    <Picker 
                     style={{ height: 50,borderWidth:0.8 }}
                     selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                     <Picker.Item label="Select Species" value="" />
                     <Picker.Item label="Dog" value="Dog" />
                     <Picker.Item label="Cattle" value="Cattle" />
                     <Picker.Item label="Buffalow" value="Buffalow" />
                     <Picker.Item label="Goat" value="Goat" />
                     <Picker.Item label="Pig" value="Pig" />
                     <Picker.Item label="Sheep" value="Sheep" />
                   </Picker>
                   
                 </View>
 
    <Text style={{fontSize:20,fontWeight:'bold' ,marginTop:25,marginLeft:16,color:'#26a69a'}}>Select Problem</Text>
      <View style={{ width: '90%',alignSelf:'center'  ,borderWidth:1,borderRadius:10,marginTop:20 }}>
    <Picker 
                     style={{ height: 50,borderWidth:0.8 }}
                     selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                     <Picker.Item label="Select Problem" value="" />
                     <Picker.Item label="Animal Sick" value="Field veterinarian" />
                     <Picker.Item label="Need Expert" value="Expert veterinarian" />
                     <Picker.Item label="Vaccination" value="Para veterinarian new" />
                     <Picker.Item label="Dewormer" value="Para veterinarian" />
                   </Picker>
                   
                 </View>
 
                 <Text style={{fontSize:20,fontWeight:'bold' ,marginTop:25,marginLeft:16,color:'#26a69a'}}>Select Problem in detail</Text>
   <View style={{ width: '90%',alignSelf:'center'  ,borderWidth:1,borderRadius:10,marginTop:20 }}>
   <Picker 
                     style={{ height: 50,borderWidth:0.8 }}
                     onValueChange={(itemValue, itemIndex) => this.setState({ packageDetail: itemValue })}>
                 <Picker.Item label="Select Problem" value="" />
                     <Picker.Item label="Animal Sick" value="Field veterinarian" />
                     <Picker.Item label="Need Expert" value="Expert veterinarian" />
                     <Picker.Item label="Vaccination" value="Para veterinarian new" />
                     <Picker.Item label="Dewormer" value="Para veterinarian" />
                   </Picker>
                   
                 </View>
 
                 <TouchableOpacity
                style = {styles.submitButton}
                onPress={() => {
                  Alert.alert(
                    'Identification Of level of issue?',
                    'Your problem is Need Expert. Your problem is related to Expert Veternarian do you want to contact him ',
                    [
                      {
                        text: 'No',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {
                        text: 'Yes',
                        onPress: () => {this.props.navigation.navigate('Contactlist')},
                      },
                    ],
                    {cancelable: false},
                  );
                }}
                 >
                <Text style = {styles.submitButtonText}> Submit </Text>
             </TouchableOpacity>
             
   </View>
         
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

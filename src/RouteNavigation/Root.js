import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Account/Login';
import Home from '../Home/Home'
import Signup from '../Account/Signup';
 import Forgotpass from '../Account/Forgotpass'
import Verifyotp from '../Account/Verifyotp';
import Support from '../Support/support';
import Profile from '../Profile/Profile';
import Contactlist from '../Contactlist/Contactlist';
import Success from '../Success/Success';
import Expert from '../Expert/Expert';
import Orders from '../Orders/Orders';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
  
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MyTabs() { 
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#fff',
        labelStyle: { fontSize: 14 },
        style: { backgroundColor: '#004d40' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarLabel: 'Profile' }}
      />
      <Tab.Screen
        name="Support"
        component={Support}
        options={{ tabBarLabel: 'Support' }}
      />
    </Tab.Navigator>
  );
}


 
 
export default class RouteNavigation extends React.Component {
  state = { skip: undefined, comp: '' };
 
  render() {
    return (
        <>
        <NavigationContainer>
     
          
         
         <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Forgotpass" component={Forgotpass} />
            <Stack.Screen name="Verifyotp" component={Verifyotp} />
            <Stack.Screen name="MyTabs" component={MyTabs} />
            <Stack.Screen name="Contactlist" component={Contactlist} />
            <Stack.Screen name="Success" component={Success} />
            {/* <Stack.Screen name="Support" component={Support} /> */}
            <Stack.Screen name="Expert" component={Expert} />
            <Stack.Screen name="Orders" component={Orders} />

            
          </Stack.Navigator>

        </NavigationContainer>
      </>
     
    );
  }
}

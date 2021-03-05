import { Container } from 'native-base';
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import { Assets } from '../assets/index';

export default function Splashscreen() {
  return (
    <Container
      style={{
        backgroundColor: 'white',
        width: '100%',

        resizeMode: 'contain',
      }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{ height: 150, width: 150, alignSelf: 'center' }}
          source={Assets.logo}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 245,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text numberOfLines={2} style={{ color: 'black', fontSize: 28,fontWeight:'bold',marginHorizontal:20 }}>
          On-Call Veterinary Health 
        </Text>
        <Text numberOfLines={2} style={{ color: 'black', fontSize: 28,fontWeight:'bold',marginHorizontal:20 }}>
          Service System
        </Text>
      </View>
    </Container>
  );
}

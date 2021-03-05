import React, { Component } from 'react';
import Splashscreen from './src/SplashScreen/Splash';
import { Text } from 'react-native';
import RouteNavigation from './src/RouteNavigation/Root';
 

 
 
 
export default class App extends React.Component {
  constructor(props) {
    super(props);
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
    this.state = { showApp: false };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ showApp: true });
    }, 2500);
  }
  render() {
    return (
      <>
        {this.state.showApp ? ( 
     
            <RouteNavigation />
          
        ) : (
            <Splashscreen />
          )}
      </>
    );
  }
}

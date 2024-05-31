import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Screen } from './app/components';
import LoginScreen from './app/screens/LoginScreen';


function App(props) {
  useEffect(()=>{
    SplashScreen?.hide()
  },[]);
  return (
<Screen>
<LoginScreen/>
</Screen>
  );
}

export default App;
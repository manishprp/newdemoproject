import React, { useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText';
import AppTextInput from './app/components/AppTextInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function App(props) {
  useEffect(()=>{
    SplashScreen?.hide()
  },[]);
  return (
    <SafeAreaView>
  <MaterialCommunityIcons
     name="home"
     size={40}
        />
      <AppTextInput placeholder={'Hello'} suffixIcon={'home'}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container:{}
})
export default App;
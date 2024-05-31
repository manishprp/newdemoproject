import React, { useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

function App(props) {
  useEffect(()=>{
    SplashScreen.hide();
  });
  return (
    <SafeAreaView>
    <View style={styles.container}><Text style={{fontSize:20}}>Is Sansaar ko mera pranaam</Text></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container:{}
})
export default App;
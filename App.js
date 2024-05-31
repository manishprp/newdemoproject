import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

function App(props) {
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
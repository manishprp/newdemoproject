import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../components';

function DashBoard(props) {
  return (
    <View style={styles.container}>
      <Text>This is Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
export default DashBoard;

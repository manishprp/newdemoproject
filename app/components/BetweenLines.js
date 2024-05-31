import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '.';
import {color} from '../config';

function BetweenLines({text, textStyle}) {
  return (
    <View style={styles.container}>
      <View style={styles.lineStyle} />
      <Text style={[styles.text, textStyle]}>{text}</Text>
      <View style={styles.lineStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  lineStyle: {
    backgroundColor: color.dark,
    height: 1,
    width: 100,
  },
  container: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    marginHorizontal: 8,
    fontSize: 14,
  },
});
export default BetweenLines;

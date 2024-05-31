import React from 'react';
import {StyleSheet, Text} from 'react-native';

function ErrorMessage({error, isVisible}) {
  if (!isVisible && !error) {
    return null;
  }
  return <Text style={styles.container}>{error}</Text>;
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    color: 'tomato',
    fontWeight: '400',
  },
});
export default ErrorMessage;

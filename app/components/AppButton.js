import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../config/colors';

function AppButton({onPress, style, title}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
    marginHorizontal: 20,
    padding: 15,
    overflow: 'hidden',
  },
  text: {color: colors.white, fontSize: 20},
});
export default AppButton;

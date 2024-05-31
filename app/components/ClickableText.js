import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

import {Text} from '.';
import {color} from '../config';

function ClickableText({clickableText, nonClickableText, onPress, style}) {
  return (
    <View style={style}>
      <Text style={styles.normal}>
        {nonClickableText}
        <TouchableWithoutFeedback
          style={{
            justifyContent: 'flex-end',
            alignItems: 'baseline',
          }}
          onPress={onPress}>
          <Text style={styles.click}> {clickableText}</Text>
        </TouchableWithoutFeedback>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  normal: {
    fontSize: 18,
  },
  click: {
    fontSize: 18,
    color: color.primary,
  },
  container: {},
});
export default ClickableText;

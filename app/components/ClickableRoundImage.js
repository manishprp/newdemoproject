import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

function ClickableRoundImage({image, style, onPress}) {
  if (!image) return null;
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={[styles.image, style]} source={image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
  },
});
export default ClickableRoundImage;

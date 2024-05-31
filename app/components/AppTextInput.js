import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

function AppTextInput({
  placeholder,
  style: textStyle,
  containeStyle,
  suffixIcon,
  iconColor = colors.secondary,
  iconSize = 35,

  ...textInputProps
}) {
  return (
    <View style={[styles.container, containeStyle]}>
      {suffixIcon && (
        <MaterialCommunityIcons
          name={suffixIcon}
          size={iconSize}
          color={iconColor}
        />
      )}
      <TextInput
      
        {...textInputProps}
        placeholder={placeholder}
        style={[styles.text, textStyle]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    backgroundColor: colors.medium,
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    backgroundColor: colors.medium,

    color: colors.black,
    marginHorizontal: 10,
    fontSize: 20,
  },
});
export default AppTextInput;

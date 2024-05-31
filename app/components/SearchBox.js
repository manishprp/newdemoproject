import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from '../config';
function SearchBox({whileChange = () => {}, placeholder = 'Search', onSubmit}) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(false);
  const _showHideDeleteButton = newText => {
    if (newText.length === 0) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons size={40} color={color.dark} name="text-search" />
      <TextInput
        onSubmitEditing={() => {
          onSubmit(text);
        }}
        inputMode="search"
        value={text}
        onChangeText={newText => {
          setText(newText);
          _showHideDeleteButton(newText);
          whileChange(newText);
        }}
        placeholder={placeholder}
        style={{
          marginHorizontal: 10,
          flex: 1,
          fontSize: 20,
          backgroundColor: color.medium,
          borderRadius: 20,
        }}></TextInput>
      {show && (
        <TouchableOpacity
          onPress={() => {
            setText('');
            setShow(false);
          }}>
          <MaterialCommunityIcons size={40} color={color.dark} name="delete" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: color.medium,
    borderRadius: 20,
    margin: 10,
  },
});
export default SearchBox;

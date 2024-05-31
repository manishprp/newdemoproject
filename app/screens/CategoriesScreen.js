import React, {useEffect} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import listing from '../api/listings';
import {AppActivityIndicator, Text} from '../components';
import {color} from '../config';
import useApi from '../hooks/useApi';

_renderItem = ({item}) => (
  <TouchableOpacity style={{flex: 1}} onPress={() => console.log(item)}>
    <View style={styles.container}>
      <Text style={styles.textItem} numberOfLines={1}>
        {item}
      </Text>
    </View>
  </TouchableOpacity>
);
function CategoriesScreen(props) {
  const {
    request: loadLostring,
    data: listItem,
    error,
    loading,
  } = useApi(listing.getCategories);
  useEffect(() => {
    loadLostring();
  });

  if (loading) {
    return <AppActivityIndicator />;
  }

  return (
    <FlatList
      style={{width: '100%'}}
      numColumns={2}
      data={listItem}
      renderItem={_renderItem}
      keyExtractor={item => item.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    margin: 10,
    backgroundColor: color.medium,
    borderRadius: 15,
    padding: 20,
  },
  textItem: {
    textAlign: 'center',
    fontSize: 20,
    color: color.black,
  },
});
export default CategoriesScreen;

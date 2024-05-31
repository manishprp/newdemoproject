import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import listings from '../api/listings';
import {AppActivityIndicator, CardItem, SearchBox} from '../components';
import useApi from '../hooks/useApi';

function SearchScreen(props) {
  const {
    request: search,
    error,
    data: list,
    loading,
  } = useApi(listings.searchProduct);

  if (loading) {
    return <AppActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <SearchBox
        onSubmit={searchText => {
          search(searchText);
        }}
      />

      {list && (
        <FlatList
          data={list?.products}
          keyExtractor={item => item?.id.toString()}
          renderItem={item => <CardItem item={item?.item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default SearchScreen;

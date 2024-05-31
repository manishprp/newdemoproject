import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import listings from '../api/listings';
import {AppActivityIndicator, CardItem} from '../components';
import {color} from '../config';
import useApi from '../hooks/useApi';

_renderItem = ({item}) => <CardItem item={item} />;

function ProductsList(props) {
  const {
    error,
    data: prodObject,
    request: getProductsList,
    loading,
  } = useApi(listings.getProductList);

  useEffect(() => {
    getProductsList('smartphones');
  }, []);

  if (loading) {
    return <AppActivityIndicator />;
  }

  return (
    <FlatList
      style={{width: '100%'}}
      data={prodObject?.products}
      renderItem={_renderItem}
      keyExtractor={item => item?.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  textItem: {
    textAlign: 'center',
    fontSize: 20,
    color: color.black,
  },
});
export default ProductsList;

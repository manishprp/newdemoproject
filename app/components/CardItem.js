import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color} from '../config';

function CardItem({item, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.card}>
      {item?.images[0] && (
        <Image
          resizeMode={'contain'}
          style={styles.image}
          source={{uri: item?.images[0]}}
        />
      )}
      <Text style={styles.title}>
        {item?.brand} : {item?.title}
      </Text>
      <Text style={styles.price}>${item?.price}</Text>
      <Text style={styles.description}>{item?.description}</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    elevation: 1,
    margin: 10,
    backgroundColor: color.medium,
    borderRadius: 15,
    padding: 20,
  },
  description: {
    marginTop: 15,
    fontSize: 18,
    color: color.black,
  },
  image: {
    overflow: 'hidden',
    alignSelf: 'center',
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    color: color.black,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: color.secondary,
    fontWeight: '600',
  },
});
export default CardItem;

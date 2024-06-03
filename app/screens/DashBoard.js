import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../components';
import apiClient from '../api/client';
import {RetrieveValue} from '../utility/LocalStorage';
import useApi from '../hooks/useApi';

function DashBoard(props) {
  const endpointAuth = 'auth/refresh';
  const getUserAuth = async () => {
    const token = await RetrieveValue('token', true);
    console.log(token);
    apiClient.setHeader('Authorization', 'Bearer ' + token.value);
    apiClient.setHeader('Content-Type', 'application/json');
    const response = await apiClient.get(endpointAuth);
    console.log(apiClient.headers);
    // console.log('Error is', error);
    // console.log('Loading is', loading);
    console.log('response is', response);
  };
  const {
    error,
    data,
    loading,
    request: getCurrentUserAuth,
  } = useApi(getUserAuth);
  /* providing token in bearer */
  // fetch('https://dummyjson.com/auth/me', {
  //   method: 'GET',
  //   headers: {
  //     'Authorization': 'Bearer /* YOUR_TOKEN_HERE */',
  //   },
  // })
  // .then(res => res.json())
  // .then(console.log);

  useEffect(() => {
    getUserAuth();
  }, []);
  return (
    <View style={styles.container}>
      <Text>This is Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
export default DashBoard;

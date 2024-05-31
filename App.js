import {NavigationContainer, useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './app/navigator/AppNavigator';
import theme from './app/navigator/NavigationTheme';
import {alreadyLoggedIn} from './app/auth/Authenticate';

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const _alreadyLoggedIn = async () => {
    const ans = await alreadyLoggedIn();
    setIsLoggedIn(ans);
    SplashScreen.hide();
  };

  useEffect(() => {
    _alreadyLoggedIn();
  }, []);
  return (
    <NavigationContainer theme={theme}>
      <AppNavigator isLoggedIn={isLoggedIn} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default App;

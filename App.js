import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './app/screens/LoginScreen';

function App(props) {
  useEffect(() => {
    SplashScreen?.hide();
  }, []);
  return <LoginScreen />;
}

export default App;

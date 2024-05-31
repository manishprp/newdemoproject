import React from 'react';
import LottieView from 'lottie-react-native';
import {assets} from '../config';

export default function AppActivityIndicator() {
  return (
    <LottieView
      source={assets.activityIndicator}
      autoPlay
      speed={2}
      style={{
        height: '100%',
        width: '100%',
      }}
    />
  );
}

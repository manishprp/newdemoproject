import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

function Screen({children, style, isScrollable = false}) {
  const dim = useWindowDimensions();
  if (!isScrollable) {
    return (
      <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
    );
  } else {
    return (
      <ScrollView
        style={{height: dim.height - 50}}
        contentContainerStyle={styles.contentContainerStyle}>
        <SafeAreaView style={[styles.container, style]}>
          {children}
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
});
export default Screen;

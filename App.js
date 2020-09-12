import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DisplayScreen from './components/DisplayScreen';
import Keypad from './components/Keypad';
import Drawer from './components/Drawer';

export default function App() {
  return (
    <View style={styles.container}>
      <DisplayScreen />
      <Drawer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

import React from 'react';
import {View, StyleSheet} from 'react-native';
import DisplayScreen from './components/DisplayScreen';
import Drawer from './components/Drawer';
import {AppProvider} from './context';

export default function App() {
  
  return (
    <View style={styles.container}>
      <AppProvider>
        <DisplayScreen />
        <Drawer />
      </AppProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

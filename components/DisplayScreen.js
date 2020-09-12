import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function DisplayScreen() {
  return (
    <View style={styles.screen}>
      <Text>Hello from Display screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 0.4,
    backgroundColor: 'black'
  }
});
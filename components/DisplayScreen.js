import React, { useEffect, useContext } from 'react';
import {View, TextInput, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { AppContext } from '../context';

export default function DisplayScreen() {

  const states = useContext(AppContext);

  const {display, setDisplay, input} = states;

  
  

  return (
    <View style={styles.screen}>
        <View style={styles.content}>
          <Text style={styles.input}>{input}</Text>
          {/* <TextInput style={styles.input} 
            textAlign='right'
            onChangeText={handleInput}
          /> */}
          <Text style={styles.resultText}>{display}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 0.4,
    backgroundColor: 'black'
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10
  },
  input: {
    alignSelf: 'flex-end',
    fontSize: 40,
    color: '#fff'
  },
  resultText: {
    alignSelf: 'flex-end',
    fontSize: 40,
    marginTop: 15,
    marginBottom: 5,
    color: 'gray'
  }
});
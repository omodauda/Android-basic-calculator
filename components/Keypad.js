import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Drawer from './Drawer';

export default function Keypad() {
    return (
        <View style={styles.Keypad}>
            <View style={styles.keypadLayouts}>
                <View style={styles.numericKeys}>
                    <View style={styles.keys}>
                        <View style={{justifyContent: 'space-between'}}>
                                <Text style={styles.numbers}>1</Text>
                                <Text style={styles.numbers}>4</Text>
                                <Text style={styles.numbers}>7</Text>
                                <Text style={styles.numbers}>.</Text>
                        </View>
                        <View style={{justifyContent: 'space-between'}}>
                                <Text style={styles.numbers}>2</Text>
                                <Text style={styles.numbers}>5</Text>
                                <Text style={styles.numbers}>8</Text>
                                <Text style={styles.numbers}>0</Text>
                                
                        </View>
                        <View style={{justifyContent: 'space-between'}}>
                            <Text style={styles.numbers}>3</Text>
                            <Text style={styles.numbers}>6</Text>
                            <Text style={styles.numbers}>9</Text>
                            <Text style={styles.numbers}>=</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.operators}>
                    <View style={styles.operatorsKeys}>
                        <Text style={styles.operatorsText}>DEL</Text>
                        <Text style={styles.operatorsText}>÷</Text>
                        <Text style={styles.operatorsText}>x</Text>
                        <Text style={styles.operatorsText}>−</Text>
                        <Text style={styles.operatorsText}>+</Text>
                    </View>
                </View>
                <View style={styles.drawerNav}>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Keypad: {
        flex: 1,
        flexDirection: 'row'
    },
    keypadLayouts: {
        flex: 1,
        flexDirection: 'row'
    },
    numericKeys: {
        flex: 3,
        backgroundColor: '#252422',
        paddingHorizontal: 40,
        paddingVertical: 50
    },
    keys: {
        flex: 1,
        flexDirection:"row",
        justifyContent: 'space-between',
    },
    numbers: {
        fontSize: 40,
        color: '#fff'
    },
    operators: {
        flex: 1.5,
        backgroundColor: '#1b262c',
    },
    operatorsKeys: {
        flex: 1,
        justifyContent:'space-between',
        alignItems: 'center',
        marginVertical: 45,
    },
    operatorsText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff7b00'
    },
    drawerNav:{
        flex: 0.4,
        backgroundColor: '#ff7b00'
    },
   
   
});

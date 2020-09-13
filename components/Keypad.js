import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../context';

export default function Keypad() {

    const states = useContext(AppContext);

    const {handleInput, removeInput, evaluate, clearScreen} = states;

    return (
        <View style={styles.Keypad}>
            <View style={styles.keypadLayouts}>
                <View style={styles.numericKeys}>
                    <View style={styles.keys}>
                        <View style={{justifyContent: 'space-between'}}>
                                <TouchableOpacity onPress={() => handleInput(1)}>
                                    <Text style={styles.numbers}>1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleInput(4)}>
                                    <Text style={styles.numbers}>4</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleInput(7)}>
                                    <Text style={styles.numbers}>7</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleInput(".")}>
                                    <Text style={styles.numbers}>.</Text>
                                </TouchableOpacity>
                        </View>
                        <View style={{justifyContent: 'space-between'}}>
                            <TouchableOpacity onPress={() => handleInput(2)}>
                                <Text style={styles.numbers}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleInput(5)}>
                                <Text style={styles.numbers}>5</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleInput(8)}>
                                <Text style={styles.numbers}>8</Text>
                            </TouchableOpacity>   
                            <TouchableOpacity onPress={() => handleInput(0)}>
                                <Text style={styles.numbers}>0</Text>
                            </TouchableOpacity>                                
                        </View>
                        <View style={{justifyContent: 'space-between'}}>
                            <TouchableOpacity onPress={() => handleInput(3)}>
                                <Text style={styles.numbers}>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => handleInput(6)}>
                                <Text style={styles.numbers}>6</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => handleInput(9)}>
                                <Text style={styles.numbers}>9</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={evaluate}>
                                <Text style={styles.numbers}>=</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.operators}>
                    <View style={styles.operatorsKeys}>
                       <TouchableOpacity onPress={() => removeInput()} onLongPress={clearScreen}>
                        <Text style={styles.operatorsText}>DEL</Text>
                       </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleInput("/")}>
                            <Text style={styles.operatorsText}>÷</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleInput("*")}>
                            <Text style={styles.operatorsText}>x</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleInput("-")}>
                            <Text style={styles.operatorsText}>−</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleInput("+")}>
                            <Text style={styles.operatorsText}>+</Text>
                        </TouchableOpacity>
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

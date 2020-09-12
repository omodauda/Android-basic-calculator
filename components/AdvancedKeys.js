import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function AdvancedKeys(props) {
    return (
        <View style={styles.container}>
            <View style={styles.functions}>
                <View style={styles.columns}>
                    <Text style={styles.funcText}>INV</Text>
                    <Text style={styles.funcText}>sin</Text>
                    <Text style={styles.funcText}>In</Text>
                    <Text style={styles.funcText}>π</Text>
                    <Text style={styles.funcText}>(</Text>
                </View>
                <View style={styles.columns}>
                    <Text style={styles.funcText}>RAD</Text>
                    <Text style={styles.funcText}>cos</Text>
                    <Text style={styles.funcText}>log</Text>
                    <Text style={styles.funcText}>e</Text>
                    <Text style={styles.funcText}>)</Text>
                </View>
                <View style={styles.columns}>
                    <Text style={styles.funcText}>%</Text>
                    <Text style={styles.funcText}>tan</Text>
                    <Text style={styles.funcText}>!</Text>
                    <Text style={styles.funcText}>^</Text>
                    <Text style={styles.funcText}>√</Text>
                </View>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40,
        paddingVertical: 50
    },
    functions: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    columns: {
       justifyContent: 'space-between'
    },
    funcText:{
        fontSize: 20,
        color: '#fff',
        fontWeight: '600'
    }
})

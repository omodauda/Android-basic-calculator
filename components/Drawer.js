import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Keypad from './Keypad';
import AdvancedKeys from './AdvancedKeys';

const Drawer = createDrawerNavigator();

export default function() {
    return (
       <NavigationContainer>
            <Drawer.Navigator 
             initialRouteName="Keypad" 
             drawerPosition="right"
             drawerStyle={{backgroundColor: '#ff7b00'}}
             drawerContent={() => <AdvancedKeys />}
             >
                <Drawer.Screen name="Keypad" component={Keypad} />
            </Drawer.Navigator>
       </NavigationContainer>
    )
}

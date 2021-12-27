import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import AddTransaction from '../screens/add-transaction';
import AddWallet from '../screens/add-wallet';
import EditWallet from '../screens/edit-wallet';

const Stack = createStackNavigator();

const HomeStackNavigator = (props) => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='AddTransaction' component={AddTransaction} />
            <Stack.Screen name='AddWallet' component={AddWallet} />
            <Stack.Screen name='EditWallet' component={EditWallet} />
        </Stack.Navigator>
    );
}

export default HomeStackNavigator;

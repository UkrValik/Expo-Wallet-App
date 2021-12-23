import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import History from '../screens/history';
import Statistics from '../screens/statistics';
import Settings from '../screens/settings';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

const MainBottomNavigator = (props) => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='HomeStack' component={HomeStackNavigator} />
            <Tab.Screen name='History' component={History} />
            <Tab.Screen name='Statistics' component={Statistics} />
            <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
    );
}

export default MainBottomNavigator;

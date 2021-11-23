import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home';
import History from '../screens/history';
import Statistics from '../screens/statistics';
import Settings from '../screens/settings';

const Tab = createBottomTabNavigator();

const MainBottomNavigator = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='History' component={History} />
            <Tab.Screen name='Statistics' component={Statistics} />
            <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
    );
}

export default MainBottomNavigator;

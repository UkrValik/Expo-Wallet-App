import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import History from '../screens/history';
import Statistics from '../screens/statistics';
import Settings from '../screens/settings';
import HomeStackNavigator from './HomeStackNavigator';
<<<<<<< HEAD
import colors from '../../assets/colors.json';
=======
>>>>>>> 694d6474e40ca4fec75d7267a52203441504b972

const Tab = createBottomTabNavigator();

const MainBottomNavigator = (props) => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
<<<<<<< HEAD
            <Tab.Screen
                name='HomeStack'
                component={HomeStackNavigator}
                options={{
                    title: 'Домашня',
                    tabBarActiveTintColor: '#000',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name='home'
                            color={focused ? '#000' : colors.background}
                            size={size}
                            />
                    ),
                }}
                />
            <Tab.Screen
                name='History'
                component={History}
                options={{
                    title: 'Історія',
                    tabBarActiveTintColor: '#000',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name='list'
                            color={focused ? '#000' : colors.background}
                            size={size}
                            />
                    ),
                }}
                />
            <Tab.Screen
                name='Statistics'
                component={Statistics}
                options={{
                    title: 'Статистика',
                    tabBarActiveTintColor: '#000',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name='stats-chart'
                            color={focused ? '#000' : colors.background}
                            size={size}
                            />
                    ),
                }}
                />
            <Tab.Screen
                name='Settings'
                component={Settings}
                options={{
                    title: 'Налаштування',
                    tabBarActiveTintColor: '#000',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name='settings'
                            color={focused ? '#000' : colors.background}
                            size={size}
                            />
                    ),
                }}
                />
=======
            <Tab.Screen name='HomeStack' component={HomeStackNavigator} />
            <Tab.Screen name='History' component={History} />
            <Tab.Screen name='Statistics' component={Statistics} />
            <Tab.Screen name='Settings' component={Settings} />
>>>>>>> 694d6474e40ca4fec75d7267a52203441504b972
        </Tab.Navigator>
    );
}

export default MainBottomNavigator;

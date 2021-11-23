import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/sign-up';
import MainBottomNavigator from './MainBottomNavigator';

const Stack = createStackNavigator();

const MainStackNavigator = (props) => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignUp'>
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='Main' component={MainBottomNavigator} />
        </Stack.Navigator>
    );
}

export default MainStackNavigator;

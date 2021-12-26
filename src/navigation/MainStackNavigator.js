import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import SignUp from '../screens/sign-up';
import SignIn from '../screens/sign-in';
import MainBottomNavigator from './MainBottomNavigator';
import { selectUser } from '../redux/userSlice';
import LoadingScreen from '../components/LoadingScreen';

const Stack = createStackNavigator();

const MainStackNavigator = (props) => {

    const user = useSelector(selectUser);

    if (user.loading) {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignIn'>
                <Stack.Screen name='Loading' component={LoadingScreen} />
            </Stack.Navigator>
        );
    } else if (user.token) {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignIn'>
                <Stack.Screen name='Main' component={MainBottomNavigator} />
            </Stack.Navigator>
        );
    } else {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignIn'>
                <Stack.Screen name='SignIn' component={SignIn} />
                <Stack.Screen name='SignUp' component={SignUp} />
            </Stack.Navigator>
        );
    }
}

export default MainStackNavigator;

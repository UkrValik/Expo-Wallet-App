import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainBottomNavigator from './navigation/MainBottomNavigator';

const Main = () => {

    return (
        <NavigationContainer>
            <MainBottomNavigator />
        </NavigationContainer>
    );
}

export default Main;

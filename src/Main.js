import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStackNavigator from './navigation/MainStackNavigator';

const Main = (props) => {

    return (
        <NavigationContainer>
            <MainStackNavigator />
        </NavigationContainer>
    );
}

export default Main;

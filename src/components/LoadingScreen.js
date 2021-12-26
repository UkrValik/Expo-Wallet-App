import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import colors from '../../assets/colors.json';

const LoadingScreen = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Loading...
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    text: {
        fontSize: 30,
    }
});

export default LoadingScreen;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Statistics = (props) => {

    return (
        <View style={styles.container}>
            <Text>
                Statistics Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Statistics;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryDate = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.date.split('-').reverse().join('.')}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
    }
});

export default HistoryDate;

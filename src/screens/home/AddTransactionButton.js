import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AddTransactionButton = (props) => {

    const moveToAddTransactionScreen = (navigation) => {
        if (props.enabled) {
            navigation.navigate('AddTransaction')
        }
    }

    return (
        <TouchableOpacity disabled={!props.enabled} onPress={() => moveToAddTransactionScreen(props.navigation)}>
            <View style={[styles.container, { borderColor: props.enabled ? '#000' : '#aaa' }]}>
                <Text style={styles.title}>
                    Add transaction
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 5,
        borderRadius: 10,
        borderColor: '#000',
        backgroundColor: '#fff',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    title: {
        color: '#000',
        fontSize: 24,
        fontWeight: '900',
    }
});

export default AddTransactionButton;

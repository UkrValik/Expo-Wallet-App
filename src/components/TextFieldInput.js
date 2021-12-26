import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextFieldInput = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {props.placeholder}
            </Text>
            <TextInput
                ref={props.refProp}
                placeholder={props.placeholder}
                value={props.value}
                style={styles.input}
                onChangeText={(text) => props.onChangeText(text)}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        borderWidth: 3,
        borderRadius: 10,
        justifyContent: 'space-around',
    },
    input: {
        borderBottomWidth: 0,
        fontSize: 24,
        marginLeft: 10,
    },
    label: {
        fontSize: 12,
        marginLeft: 10,
        color: '#888',
    }
});

export default TextFieldInput;

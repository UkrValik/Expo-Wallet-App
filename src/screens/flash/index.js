import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Flash = (props) => {

    return (
        <View style={styles.container}>
            <Text>
                This is Flash
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

export default Flash;

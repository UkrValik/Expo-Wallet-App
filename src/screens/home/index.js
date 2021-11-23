import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = (props) => {

    return (
        <View style={styles.container}>
            <Text>
                Home third
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

export default Home;

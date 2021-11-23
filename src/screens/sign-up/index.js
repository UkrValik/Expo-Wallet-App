import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SignUp = (props) => {

    return (
        <View style={styles.container}>
            <Text>
                SignUp Screen
            </Text>
            <Button 
                title='Зареєструватися'
                onPress={() => props.navigation.navigate('Main')}
                />
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

export default SignUp;

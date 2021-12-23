import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const BankCard = (props) => {

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 24, color: '#fff'}}>
                {props.wallet.balance}
            </Text>
            <Text style={[styles.cardNumber], {color: props.wallet.color}}>
                {props.wallet.cardNumber}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: '#000',
        width: SCREEN_WIDTH / 2 - 22.5,
        height: SCREEN_WIDTH / 4 - 2.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardNumber: {
        marginTop: 10,
    }
});

export default BankCard;

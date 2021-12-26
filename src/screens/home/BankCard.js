import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const BankCard = (props) => {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.container, {backgroundColor: props.highlight ? '#777' : '#000'}]}>
                <Text style={{fontSize: 24, color: '#fff'}}>
                    {props.wallet.value}
                </Text>
                <Text style={[styles.cardNumber], {color: props.wallet.color}}>
                    {props.wallet.name}
                </Text>
            </View>
        </TouchableOpacity>
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

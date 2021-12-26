import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../../../assets/colors.json';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const AddWalletButton = (props) => {

    const navigateToAddWalletScreen = (navigation) => {
        navigation.navigate('AddWallet');
    }

    return (
        <TouchableOpacity onPress={() => navigateToAddWalletScreen(props.navigation)}>
            <View style={styles.container}>
                <Ionicons
                    name='add'
                    color='#000'
                    size={50}
                    />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#000',
        backgroundColor: '#fff',
        width: SCREEN_WIDTH / 2 - 22.5,
        height: SCREEN_WIDTH / 4 - 2.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
    }
});

export default AddWalletButton;

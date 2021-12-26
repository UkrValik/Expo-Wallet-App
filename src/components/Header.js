import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = (props) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onIconPress}>
                <View style={styles.iconContainer}>
                    <Ionicons
                        name='chevron-back'
                        size={24}
                        color='#fff'
                        />
                </View>
            </TouchableOpacity>
            <Text style={styles.header}>
                {props.header}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        paddingRight: 20,
        height: 50,
    },
    header: {
        fontSize: 24,
        color: '#fff',
        fontWeight: '600',
    },
    iconContainer: {
        paddingHorizontal: 10,
    }
});

export default Header;

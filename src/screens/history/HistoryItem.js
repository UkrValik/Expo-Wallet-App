import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HistoryItem = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.valueContainer}>
                <View>
                    <View style={styles.valueBlock}>
                        <Text style={styles.sign}>
                            {props.transaction.sign}
                        </Text>
                        <Text style={styles.value}>
                            {props.transaction.value}
                        </Text>
                    </View>
                    <Text style={styles.category}>
                        {props.transaction.category}
                    </Text>
                </View>
                <View style={styles.icons}>
                    <TouchableOpacity>
                        <Ionicons
                            name='pencil'
                            color='#000'
                            size={24}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons
                            name='remove-circle-outline'
                            color='#000'
                            size={26}
                            />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 3,
        backgroundColor: '#fff',
        height: 60,
        marginVertical: 5,
        justifyContent: 'center',
    },
    valueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    value: {
        fontSize: 24,
        fontWeight: '700',
    },
    sign: {
        fontSize: 24,
        fontWeight: '700',
    },
    category: {
        fontSize: 12,
        marginLeft: 10,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
        marginRight: 10,
    },
    valueBlock: {
        flexDirection: 'row',
    }
});

export default HistoryItem;

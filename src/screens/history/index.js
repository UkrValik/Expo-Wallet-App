import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

import colors from '../../../assets/colors.json';
import HistoryDate from './HistoryDate';
import HistoryItem from './HistoryItem';

const transactions = [
    {
        key: 1,
        category: 'Продукти',
        value: '45.50',
        description: '',
        wallet: 1,
        date: '2021-12-23',
        sign: '-',
    },
    {
        key: 2,
        category: 'Проїзд',
        value: '4.00',
        description: '',
        wallet: 1,
        date: '2021-12-23',
        sign: '-',
    },
    {
        key: 3,
        category: 'Побутові товари',
        value: '130.00',
        description: '',
        wallet: 1,
        date: '2021-12-23',
        sign: '-',
    },
    {
        key: 4,
        category: 'Продукти',
        value: '23.50',
        description: '',
        wallet: 1,
        date: '2021-12-23',
        sign: '-',
    },
    {
        key: 5,
        category: 'Зарплата',
        value: '8200.00',
        description: '',
        wallet: 1,
        date: '2021-12-22',
        sign: '+',
    },
]

const History = (props) => {

    let lastDate = '';
    transactions.sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <View style={styles.container}>
            <SafeAreaView style={{backgroundColor: colors.background}} />
            <ScrollView contentContainerStyle={{marginHorizontal: 10}}>
                {transactions.map(transaction => {
                    if (lastDate === transaction.date) {
                        return (
                            <HistoryItem key={transaction.key} transaction={transaction} />
                        );
                    } else {
                        lastDate = transaction.date;
                        return (
                            <View key={transaction.key}>
                                <HistoryDate date={transaction.date} />
                                <HistoryItem transaction={transaction} />
                            </View>
                        );
                    }
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
});

export default History;

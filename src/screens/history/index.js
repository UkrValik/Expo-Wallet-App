import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import colors from '../../../assets/colors.json';
import HistoryDate from './HistoryDate';
import HistoryItem from './HistoryItem';
import { selectUser } from '../../redux/userSlice';
import { deleteTransaction, selectUserTransactions } from '../../redux/transactionSlice';

const History = (props) => {

    const dispatch = useDispatch();
    const transactions = useSelector(selectUserTransactions);
    const user = useSelector(selectUser);
    const copyTransactions = [...transactions];

    let lastDate = '';
    copyTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));

    const onDelete = (id) => {
        dispatch(deleteTransaction({ id, token: user.token }));
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{backgroundColor: colors.background}} />
            <ScrollView contentContainerStyle={{marginHorizontal: 10}}>
                {copyTransactions.map(transaction => {
                    if (lastDate === transaction.date) {
                        return (
                            <HistoryItem key={transaction.id} transaction={transaction} />
                        );
                    } else {
                        lastDate = transaction.date;
                        return (
                            <View key={transaction.id}>
                                <HistoryDate date={transaction.date} />
                                <HistoryItem transaction={transaction} onDelete={() => onDelete(transaction.id)} />
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

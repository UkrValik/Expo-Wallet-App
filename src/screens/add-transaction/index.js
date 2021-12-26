import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Text,
    ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import TextFieldInput from '../../components/TextFieldInput';
import colors from '../../../assets/colors.json';
import { selectUser } from '../../redux/userSlice';
import { selectUserWallets, updateUserWallet } from '../../redux/walletSlice';
import { createTransaction } from '../../redux/transactionSlice';
import BankCard from '../home/BankCard';

const AddTransaction = (props) => {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const wallets = useSelector(selectUserWallets);

    const [category, setCategory] = React.useState('');
    const [value, setValue] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState('');
    const [wallet, setWallet] = React.useState(wallets[0]);

    const valueField = React.createRef();
    const categoryField = React.createRef();
    const descriptionField = React.createRef();
    const dateField = React.createRef();

    const blurAll = () => {
        valueField.current.blur();
        categoryField.current.blur();
        descriptionField.current.blur();
        dateField.current.blur();
    }

    const moveBack = () => {
        props.navigation.goBack();
    }

    const onCreateTransaction = () => {
        const transaction = {
            description, category, value, date,
            walletId: wallet.id,
            userId: user.id,
            isIncome: value >= 0,
        };
        const updatedWallet = {
            id: wallet.id,
            name: wallet.name,
            type: wallet.type,
            userId: wallet.userId,
            visible: wallet.visible,
            value: wallet.value + value,
        };
        console.log(updatedWallet, typeof updatedWallet.value);
        dispatch(createTransaction({ transaction, token: user.token }));
        dispatch(updateUserWallet({ updatedWallet, token: user.token }));
        moveBack();
    }

    return (
        <TouchableWithoutFeedback onPress={blurAll}>
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: colors.background}} />
                <Header header='Нова транзакція' onIconPress={moveBack} />
                <View style={styles.inputContainer}>
                    <TextFieldInput
                        refProp={valueField}
                        placeholder="Значення"
                        value={value}
                        onChangeText={(text) => setValue(parseFloat(text))}
                        />
                    <View style={{height: 10}} />
                    <TextFieldInput
                        placeholder="Категорія"
                        refProp={categoryField}
                        value={category}
                        onChangeText={(text) => setCategory(text)}
                        />
                    <View style={{height: 10}} />
                    <TextFieldInput
                        placeholder="Опис"
                        refProp={descriptionField}
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                        />
                    <View style={{height: 10}} />
                    <TextFieldInput
                        placeholder="Дата"
                        refProp={dateField}
                        value={date}
                        onChangeText={(text) => setDate(text)}
                        />
                    <View style={{height: 10}} />
                    <ScrollView horizontal style={styles.walletsContainer}>
                        {wallets.map((w, index) =>
                            <View key={w.id} style={{marginHorizontal: 5,}}>
                                <BankCard
                                    wallet={w}
                                    highlight={wallet.id === w.id}
                                    onPress={() => setWallet(w)}
                                    />
                            </View>
                        )}
                    </ScrollView>
                    <View style={{height: 20}} />
                    <TouchableOpacity onPress={onCreateTransaction}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonTitle}>
                                Створити
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    inputContainer: {
        paddingHorizontal: 10,
        marginTop: 20,    
    },
    buttonContainer: {
        borderRadius: 10,
        backgroundColor: '#000',
        height: 60,
        justifyContent: 'center',
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
    },
});

export default AddTransaction;

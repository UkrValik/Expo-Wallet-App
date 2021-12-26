import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import TextFieldInput from '../../components/TextFieldInput';
import Header from '../../components/Header';
import colors from '../../../assets/colors.json';
import { selectUser } from '../../redux/userSlice';
import { createUserWallet } from '../../redux/walletSlice';

const AddTransaction = (props) => {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const [name, setName] = React.useState('');
    const [value, setValue] = React.useState('');
    const [type, setType] = React.useState('');

    const nameField = React.createRef();
    const balanceField = React.createRef();
    const typeField = React.createRef();

    const blurAll = () => {
        nameField.current.blur();
        balanceField.current.blur();
        typeField.current.blur();
    }

    const moveBack = () => {
        props.navigation.goBack();
    }

    const onCreateWallet = () => {
        const wallet = {
            name, value, type,
            userId: user.id,
            visible: true,
        };
        dispatch(createUserWallet({ wallet, token: user.token }));
        moveBack();
    }

    return (
        <TouchableWithoutFeedback onPress={blurAll}>
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: colors.background}} />
                <Header header='Новий гаманець' onIconPress={moveBack} />
                <View style={styles.inputContainer}>
                    <TextFieldInput
                        refProp={nameField}
                        placeholder="Назва"
                        value={name}
                        onChangeText={(text) => setName(text)}
                        />
                    <View style={{height: 10}} />
                    <TextFieldInput
                        placeholder="Баланс"
                        refProp={balanceField}
                        value={value}
                        onChangeText={(text) => setValue(parseInt(text))}
                        />
                    <View style={{height: 10}} />
                    <TextFieldInput
                        placeholder="Тип (звичайний або прихований)"
                        refProp={typeField}
                        value={type}
                        onChangeText={(text) => setType(text)}
                        />
                    <View style={{height: 20}} />
                    <TouchableOpacity onPress={onCreateWallet}>
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
    }
});

export default AddTransaction;

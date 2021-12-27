import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback } from 'react-native';

import colors from '../../../assets/colors.json';
import TextFieldInput from '../../components/TextFieldInput';
import Header from '../../components/Header';

const EditWallet = (props) => {

    const wallet = props.route.params.wallet;

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

    return (
        <TouchableWithoutFeedback onPress={blurAll}>
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: colors.background}} />
                <Header header={wallet.name} onIconPress={moveBack} />
                <View style={styles.inputContainer}>
                    <TextFieldInput
                        refProp={nameField}
                        placeholder="Назва"
                        value={wallet.name}
                        />
                    <View style={{height: 10}} />
                    <TextFieldInput
                        placeholder="Баланс"
                        refProp={balanceField}
                        value={wallet.value.toString()}
                        />
                    <View style={{height: 10}} />
                    <TextFieldInput
                        placeholder="Тип (звичайний або прихований)"
                        refProp={typeField}
                        value={wallet.type}
                        />
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
});

export default EditWallet;

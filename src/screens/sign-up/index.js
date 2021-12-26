import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import colors from '../../../assets/colors.json';
import TextFieldInput from '../../components/TextFieldInput';
import { selectUser, register, login, saveEmail } from '../../redux/userSlice';

const SignUp = (props) => {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [secondPassword, setSecondPassword] = React.useState('');

    const emailField = React.createRef();
    const passwordField = React.createRef();
    const secondPasswordField = React.createRef();

    const blurAll = () => {
        emailField.current.blur();
        passwordField.current.blur();
        secondPasswordField.current.blur();
    }

    const onRegister = async() => {
        if (password === secondPassword) {
            dispatch(register({email, password}));
            dispatch(saveEmail({email}));
        }
    }

    return (
        <TouchableWithoutFeedback onPress={blurAll}>
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: colors.background}} />
                <View style={styles.inputContainer}>
                    <TextFieldInput 
                        placeholder='email'
                        refProp={emailField}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        />
                    <View style={{height: 10}} />
                    <TextFieldInput 
                        placeholder='password'
                        refProp={passwordField}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        />
                    <View style={{height: 10}} />
                    <TextFieldInput 
                        placeholder='repeat password'
                        refProp={secondPasswordField}
                        value={secondPassword}
                        onChangeText={(text) => setSecondPassword(text)}
                        />
                </View>
                <Button 
                    title='Зареєструватися'
                    onPress={onRegister}
                    />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.background,
        paddingHorizontal: 50,
    },
    inputContainer: {
        justifyContent: 'space-between',
        marginBottom: 10,
    }
});

export default SignUp;

import React from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import TextFieldInput from '../../components/TextFieldInput';
import colors from '../../../assets/colors.json';
import { selectUser, login, saveEmail, getUser } from '../../redux/userSlice';

const SignIn = (props) => {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const emailField = React.createRef();
    const passwordField = React.createRef();

    const blurAll = () => {
        emailField.current.blur();
        passwordField.current.blur();
    }

    const onLogin = () => {
        dispatch(login({email, password}))
            .then(res => {
                dispatch(getUser(res.payload.token));
            })
            .catch(err => console.log(err));
        dispatch(saveEmail({email}));
    }

    return (
        <TouchableWithoutFeedback onPress={blurAll}>
            <View style={styles.container}>
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
                    </View>
                <Button 
                    title='Увійти'
                    onPress={onLogin}
                    />
                <Button 
                    title='Зареєструватися'
                    onPress={() => props.navigation.navigate('SignUp')}
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

export default SignIn;

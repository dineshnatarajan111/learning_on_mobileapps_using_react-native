import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const LoginScreen = () => {
    return(
        <View style={styles.loginblock}>
            <TextInput style={styles.usna_input} placeholder="Usernanme" autoCapitalize="none"></TextInput>
            <TextInput style={styles.psw_input} placeholder="Password" textContentType="newPassword" autoCapitalize="none"></TextInput>
        </View>
    );
};
const styles= StyleSheet.create({
    usna_input: {
        padding:20,
    },
    psw_input: {
        padding:20,
    },
    loginblock: {
        alignContent: "flex-end",
        justifyContent: "flex-end",
    },
});

export default LoginScreen;
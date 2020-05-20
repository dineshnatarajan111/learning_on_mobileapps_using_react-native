import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const BoxScreen = () => {
    return(
        <View style={styles.viewstyle}>
            <View style= {styles.textonestyle} />
            <View style= {styles.texttwostyle} />
            <View style= {styles.textthreestyle} />
        </View>
    );
};

const styles= StyleSheet.create({
    viewstyle: {
        flexDirection : "row",
        height: 200,
        borderWidth: 3,
        borderColor: "red",
        justifyContent: "space-between"
    },
    textonestyle: {
        height: 50,
        width: 50,
        backgroundColor: "red",
        position: "relative",
        top: 10,
        left: 10,
    },
    texttwostyle: {
        height: 50,
        width: 50,
        backgroundColor: "blue",
        position: "relative",
        top :60,
        left: 10,
    },
    textthreestyle: {
        height: 50,
        width: 50,
        backgroundColor: "green",
        position: "relative",
        top: 10,
        right: 10
    },
});


export default BoxScreen;
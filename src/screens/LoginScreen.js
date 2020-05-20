import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Image } from 'react-native';
import {Icon} from 'react-native-elements';
import img1 from '../../assets/beach.jpg';

const LoginScreen = () => {
    return(
        <View style= {styles.out}>
            <View style={styles.container}>
                <View style= {styles.innerbox}>
                    <Image style={styles.img1} source={img1} />
                    <TextInput  style={styles.txtinp} />
                    <TextInput 
                     style={styles.txtinp} />
                </View>
                <Button 
                 title="Submit" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    out: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
    },
    container: {
        // flex: 1,
        backgroundColor:"white",
        // marginHorizontal:50,
        marginVertical:50,
        justifyContent: "center",
    },
    innerbox: {
        alignContent: "center",
        justifyContent: "center",
    },
    img1: {
        borderRadius:250,
        marginHorizontal:100,
    },
    txtinp: {
        borderBottomWidth: 2,
        borderLeftWidth:2,
        padding:10,
        marginVertical:10,
        marginHorizontal: 10,
    },
});

export default LoginScreen;
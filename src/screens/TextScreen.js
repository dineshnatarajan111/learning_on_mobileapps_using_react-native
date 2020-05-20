import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



const TextScreen = () => {
    const [password, setPassword] = useState('');
    return(
        <View>
            <Text>Enter password:</Text>
            <TextInput
             autoCapitalize="none"
             autoCorrect={false}
             value={password} 
             onChangeText={ newvalue => setPassword(newvalue) } 
             style={styles.inp} 
            />
            {password.length < 5 ? <Text>password must be greater than 5 words</Text> : null }
        </View>
    );
};

const styles= StyleSheet.create({
    inp: {
        borderColor: "black",
        marginHorizontal: 10,
        marginVertical: 20,
        borderWidth: 1,
        padding: 10,
    },
    txt: {
        marginVertical:100,
        marginHorizontal: 50,
    },
});

export default TextScreen;
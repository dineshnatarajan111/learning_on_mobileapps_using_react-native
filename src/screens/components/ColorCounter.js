import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ColorCounter = ({ type, onIncrease, onDecrease }) => {
    return(
        <View>
            <Text style={styles.txt}>{type}</Text>
            <Button 
             onPress={ () => onIncrease()}
             title={`Increase ${type}`} />
             <Button 
             onPress={ () => onDecrease()}
             title={`Decrease ${type}`} />
        </View>
    );
};

const styles= StyleSheet.create({
    txt: {
        fontSize:20,
    },
});

export default ColorCounter;
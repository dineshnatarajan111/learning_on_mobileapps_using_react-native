import React from 'react';
import { Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
    return <Text style={styles.textstyle} >This is a ComponentsScreen</Text>
};


const styles = StyleSheet.create({
    textstyle: {
        fontSize: 30,
    }
});

export default ComponentsScreen;
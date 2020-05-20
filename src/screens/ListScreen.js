import React from 'react';
import { Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 45},
        { name: 'Friend #2', age: 45},
        { name: 'Friend #3', age: 35},
        { name: 'Friend #4', age: 55},
        { name: 'Friend #5', age: 15},
        { name: 'Friend #6', age: 75},
        { name: 'Friend #7', age: 65},
        { name: 'Friend #8', age: 45},
        { name: 'Friend #9', age: 95},
        { name: 'Friend #10', age: 145},
    ];
    return(
        <FlatList
            keyExtractor ={friends => friends.name} 
            data={friends} 
            renderItem={( { item } ) => {
                return(
                <Text style={styles.texts}>{item.name}-{item.age}</Text>
                );
             }}>
        </FlatList>
         
    );
};

const styles = StyleSheet.create({
    texts: {
        marginVertical:60,
        marginHorizontal:10,
    },
});

export default ListScreen;
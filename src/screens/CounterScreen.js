import React, {useReducer} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state, counter : state.counter + action.payload};
    case "decrement":
      return {...state, counter : state.counter + action.payload};
    default:
      return state;
  }
};


const CounterScreen = () => {
  const[state, dispatch] = useReducer( reducer, {counter : 0});
  return (
    <View style={styles.container}>
      <Button 
       title="Increment"
       onPress={ () => dispatch( {type: "increment", payload : 1} ) }
       />
       <Button 
        title="Decrement"
        onPress={ () => dispatch( {type: "decrement", payload : -1} ) }
        />
        <Text>Current Counter</Text>
        <Text>{state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CounterScreen;

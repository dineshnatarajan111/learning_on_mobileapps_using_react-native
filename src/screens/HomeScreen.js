import React from "react";
import { Text, StyleSheet, View, Button} from "react-native";

const HomeScreen = ({ navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
      title="GoTo components Demo"
      onPress={ ()=> navigation.navigate('Components')} />
      <Button 
      title="GoTo List Demo"
      onPress={ ()=> navigation.navigate('List')} />
      <Button 
      title="GoTo Image Demo"
      onPress={ ()=> navigation.navigate('Image')} />
      <Button 
      title="GoTo Counter Demo"
      onPress={ ()=> navigation.navigate('Counter')} />
      <Button 
      title="GoTo Color Demo"
      onPress={ ()=> navigation.navigate('Color')} />
      <Button 
      title="GoTo SquareScreen Demo"
      onPress={ ()=> navigation.navigate('SqScreen')} />
      <Button 
      title="GoTo LoginScreen Demo"
      onPress={ ()=> navigation.navigate('LoginS')} />
      <Button 
      title="GoTo InputScreen Demo"
      onPress={ ()=> navigation.navigate('textscreen')} />
      <Button 
      title="GoTo BoxScreen Demo"
      onPress={ ()=> navigation.navigate('boxscreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

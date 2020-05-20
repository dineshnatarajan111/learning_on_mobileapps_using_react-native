import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ImageDetail from './components/ImageDetail';
import logo1 from '../../assets/beach.jpg';
import logo2 from '../../assets/forest.jpg';
import logo3 from '../../assets/mountain.jpg';

const ImageScreen = () => {
    return(
        <View>
            <ImageDetail title="beach" imageSource={logo1} />
            <ImageDetail title="forest" imageSource={logo2} />
            <ImageDetail title="mountain" imageSource={logo3} />
        </View>
    );
};

const styles= StyleSheet.create({

});

export default ImageScreen;
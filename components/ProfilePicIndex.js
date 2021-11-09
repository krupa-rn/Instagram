//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// to be added 
const MyComponent = ({name, uri}) => {
    return (
        <View style={{flex:1}}>
        <View style={styles.container}>
            <Image source={{uri: uri}} style={styles.stories}
             resizeMode='center' />
        </View>
          <Text>{name}</Text>
        </View>
    );
};
// not using currently 
const styles = StyleSheet.create({
    container: {
        height:50, width:50, 
        borderRadius:25,
        
        borderColor:'#ae22e0',
        borderWidth:3,
        margin:5
    },
    stories:{
        height: 44,
        width:44,
        borderRadius:22,
        borderWidth:1,
        borderColor:'#ffffff'
    }
});

export default MyComponent;

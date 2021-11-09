//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Profile from './ProfilePicIndex';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// create a component
const postHeader = ({imageUri, name}) => {
    //to recieve image uri and name to display 
    
    return (
        <View style={styles.container}>
           
            <Profile uri="https://picsum.photos/500" name=""/>
            <View style={styles.user}>
            <Text style={{fontWeight:'bold', color:'#3c3c3c',}}>User_Name</Text>
            </View>
            <View style={{ flex:1, justifyContent:'center', alignItems:'flex-end', padding:5}}>

            <Icon name="dots-vertical" size={20} color="#4f4f4f"/>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
         flexDirection:'row',
        marginHorizontal:8,
        //backgroundColor: 'pink',
        height:65,
        justifyContent:'flex-start',
        alignContent:'center',
        borderTopColor:'lightgrey',
        borderTopWidth:1
    },
    user:{
       flex:3.9,
       justifyContent:'center',
       alignItems:'flex-start',
       },
       icon:{
           marginLeft:200, 
       }
});

//make this component available to the app
export default postHeader;

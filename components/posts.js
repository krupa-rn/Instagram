//import liraries
import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Header from '../components/postHeader';
import Footer from '../components/postFooter';

// create a component
const post = () => {
    return (
        <View style={styles.container}>
       
         <Header/>
         <Image source={{uri:'https://picsum.photos/420/400'}} style={styles.post}
          resizeMode='stretch' />
         <Footer/>
         
        </View>
        
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent:'center',
        //backgroundColor: '#2c3e50',
        //width: 390,
        width:Dimensions.get('window').width,
    },
    post:{
      width: wp('100%'),
      height: wp('100%'),
      marginBottom: 5  
    }
   
});

//make this component available to the app
export default post;

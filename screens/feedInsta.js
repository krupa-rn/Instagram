//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Stories from '../components/Stories';
import FeedPosts from '../components/posts';
// create a component
const MyComponent = () => {

    const post = [{   //to get from network 
       user:{ //for header
           imageUri: "",
            name:'',
       },
       postUri:'', //for post
       data:{      //for footer 
            noLikes: 25,
            noComments : 10,
            captions:'#woke #etc'
       },
       comments:"",
       bookmarked: true,
    }];

    return (
        <View style={styles.container}>
            <Stories/>
            <ScrollView>
            <FeedPosts />
            <FeedPosts/>
            <FeedPosts />
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    
    },
});

//make this component available to the app
export default MyComponent;

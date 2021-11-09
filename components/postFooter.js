//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Const from '../Instagram/constants';
// create a component
const postFooter = () => {

    const [like, setLike] = useState(false);
    const [color, changeColor] = useState('#0f0f0f');
    const [iconName, changeIcon] = useState('heart-outline');
    const [countLike, setLikeCount] = useState(10);
    const LikePost =() =>{
       
        if(!like){     //when disliked 
           
            changeIcon('heart')
            changeColor(Const.insta_red)
            setLike(true);  
            setLikeCount(countLike +1);
    
        }

        else if(like){
            changeIcon('heart-outline')
            changeColor(Const.insta_grey)
            setLike(false); 
            setLikeCount(countLike - 1);
           
        }
    }
    return (
        <>
        <View style={styles.container}>
            <Icon name={iconName} size={28} 
               color={color}
               onPress={LikePost}/>
            <Text>   </Text>
            <Icon name="md-chatbubble-outline" size={25} color={Const.insta_grey}
               onPress={()=>{Alert.alert("Comments")}}/>
            <Text>   </Text>
            <Icon name="md-paper-plane-outline" size={25} color={Const.insta_grey} 
               onPress={()=>{Alert.alert("Message")}}/>
            <Text>                                                              </Text>    
            <Icon name="md-bookmark-outline" size={25} color={Const.insta_grey}
               onPress={()=>{Alert.alert("bookmark")}}
               style={{textAlign:'left'}}/>
        </View>
        <View style={{ margin:5, padding:5}}>
         <Text style={{fontWeight:'500'}}>{countLike} Likes</Text>
        </View>
        <Text>   Caption Here #abc </Text>
        <Text style={{color:'gray'}}>   Posted 6 hours ago </Text>
        <Text>{'\n'}</Text>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        //flex:1,
        flexDirection:'row',
        paddingLeft:10,
        //backgroundColor: 'pink',
    },
});

//make this component available to the app
export default postFooter;

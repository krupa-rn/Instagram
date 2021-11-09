  import React, { useState } from 'react'; 
  import {StyleSheet, Text,View, Dimensions, TouchableHighlight, SafeAreaView} from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';
  
  const input =() => {
      //checked 
   return(
      <SafeAreaView style={styles.container}> 
        <View style={styles.drawLine}>
          <Text style={{color:'gray'}}>OR</Text>
        </View> 
        <TouchableHighlight 
         underlayColor='#d28cbd'
         onPress={()=>{}}>
          <View style={styles.touchComponent}>
            <Icon name='md-logo-facebook' size={25} color='lightgray' />
           <Text 
           style={{marginHorizontal:10, fontSize:20, color:'lightgray'}}>
             Login With FaceBook </Text>
           </View>
        </TouchableHighlight>
      </SafeAreaView>
   ); 
  } 
  
  const styles = StyleSheet.create({
       container:{ 
          pading:10,
          justifyContent:'flex-end',
          alignItems:'center',
          width: Dimensions.get('window').width
       } ,
       drawLine:{
         alignItems:'center',
         borderTopWidth: 1,
         borderColor:'lightgrey',
         width:370,
         padding:10, 
         
       },
       touchComponent:{
         padding:10,
         marginHorizontal: 15,
         flexDirection:'row',
         alignItems:'baseline'
       }
  }); 
  
  export default input;  

 
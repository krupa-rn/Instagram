import React from 'react'; 
import {Pressable, StyleSheet, Text,View, Dimensions} from 'react-native' ;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Mybutton =() => {

 return (
<View style={styles.container}> 
 <Pressable onPress={onPressHandler} style={styles.button}>
     <Text style={{fontSize:20,}}> Log In </Text>
 </Pressable>
</View>
 ); 
} 

const styles = StyleSheet.create({
     container:{ } ,
     button:{
         height: hp('6.5%'),
         backgroundColor:'#d28cbd',
         borderRadius:wp('2%'),
         alignItems:'center',
         pading:5,
         justifyContent:'space-around',
         width:Dimensions.get('window').width -10,
     }
}); 

export default Mybutton;
import React from 'react'; 
import {StyleSheet, Text,View} from 'react-native' 
import {AntDesign} from 'react-native-vector-icons';
import colors from '../misc/colors';

const RoundIcon =(antIconName, size, color, style, onPress) => {
 return (
   <View style={styles.container}> 
    <AntDesign name={antIconName} size={size || 24} color={color || colors.LIGHT}
      style={[styles.icon, {...style} ]}
      onPress={onPress} />
   </View>
 ); 
} 

const styles = StyleSheet.create({
     container:{ } ,
     icon:{
         backgroundColor: colors.PRIMARY,
         padding:50, borderRadius:60,
         elevation: 5,

     }
}); 

export default RoundIcon;
import React from 'react'; 
import {StyleSheet, Text,TextInput,View} from 'react-native' 
import colors from '../misc/colors';

const SearchBar =({containerStyle}) => {
 return (
   <View style={[styles.container, {...containerStyle} ] }> 
     <TextInput style={styles.searchbar} placeholder="Search" 
      />
   </View>
 ); 
} 

const styles = StyleSheet.create({
     container:{ } ,
     searchbar:{
          borderWidth:0.5,
          borderColor: colors.PRIMARY,
          height:40, borderRadius:40,
          paddingLeft:15,
          fontSize:20, 
     }
}); 

export default SearchBar;
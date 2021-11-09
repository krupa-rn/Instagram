import React, { useEffect, useState } from 'react'; 
import {StatusBar, StyleSheet, Text,View} from 'react-native' ;
import colors from '../misc/colors';
import SearchBar from '../components/SearchBar';

const NoteScreen =({user}) => {
    const [greet, setGreet] = useState('Evening');

    const findGreet =() =>{
       const hrs =  new Date().getHours();
       if(hrs ===0 || hrs<12) return setGreet('Morniong');
       if(hrs === 12 || hrs <18) return setGreet('Afternoon');
       setGreet('Evening');
    }
    useEffect(()=>{
         findGreet()
    }, [])
 return (
     <>
     <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT} />
       <View style={styles.container}> 
       <Text style={styles.header}> Good {greet} {user.name} </Text>
       <SearchBar containerStyle={ {marginVertical: 15} }/>
       <View style={[StyleSheet.absoluteFillObject,styles.emptyView]} >
         <Text style={styles.emptynote}> Add Notes </Text>
     </View>
    </View>
    </>
 ); 
} 

const styles = StyleSheet.create({
     container:{ 
         paddingHorizontal: 20,
         flex:1, 
     } ,
     header:{
         fontSize:25,
         fontWeight:'bold'
     },
     emptyView:{
        justifyContent:'center', alignItems:'center', flex:1
     }, 
     emptynote:{
        fontSize:30,
        textTransform:'uppercase',
        fontWeight:'bold', opacity:'0.2',

     }
}); 

export default NoteScreen;
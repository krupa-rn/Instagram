import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'; 
import {StyleSheet, Text, TextInput, View, Dimensions, StatusBar} from 'react-native';
import RoundIcon from '../components/RoundIcon';
import colors from '../misc/colors';

const Intro =() => {
    const [user, setUser] = useState('');
    async function handleSubmit (){
        const userName = {name: user} 
        await AsyncStorage.setItem( 'user', JSON.stringify(userName) );
        
    }

 return (
     <>
     <StatusBar hidden />
     <View style={styles.container}> 
      <Text style={styles.title}>Enter your name to Continue </Text>
      <TextInput placeholder="Enter Name" style={styles.input}
       value={user} onChangeText={text=> setUser(text)}/>

    {/*conditional rendering of a component  */}
    { user.trim().length >= 3 ?
     (<RoundIcon antIconName="arrowright"  onPress={handleSubmit}/> ): null }
     </View>
     </>
 ); 
} 
const {width} = Dimensions.get('window') - 50;
    
const styles = StyleSheet.create({
   
     container:{ flex:1,
    justifyContent:'center',
    alignItems:'center', 
} ,
input:{
    borderColor:colors.PRIMARY,
    width: width,
    height:50,
    borderWidth: 2,
    borderRadius:10,
    paddingLeft:15, fontSize:25,
    marginBottom: 25,
}, 
title:{
    alignSelf:'flex-start',
    paddingLeft:25,
    marginBottom:5,
    opacity:0.6,

}
}); 

export default Intro;
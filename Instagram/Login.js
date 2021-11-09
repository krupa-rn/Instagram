import React, { useState } from 'react'; 
import {SafeAreaView, StyleSheet, Text,View, TextInput, Dimensions, StatusBar, Alert}  from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import OtherLogin from './InputComponent';
import Mybutton from './buttonComponent';
//insta login screen , first screen currently

const App =() =>{
    
    const move = useNavigation();
    const[user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState('');
    const [empty, setEmpty] = useState('');
    //loading custom font 
   
    // function validator(){
    //   if(pwd.length < 8){
    //     setError("Password must be at least 8 characters.")} 
    //   else{

    //   }
    // };
    onPressHandler =()=>{
        //validate user and password, redirect to profile page 
        if(pwd.length < 8){
          setError("Password must be at least 8 characters.");
          return;
        }
        else if(user==""){
          setEmpty("Email or User Name can't be blank");
        }
        else{
          move.navigate('Profile');
        }
        
    }
 return(
      // <StatusBar barStyle="dark-content" />
     <SafeAreaView style={{flex:1, backgroundColor:'#a13074', alignItems:'center'}}>
    <View style={styles.container}> 
      <Text style={styles.title}> Instagram </Text>
      <TextInput 
          placeholder="Email or User Name"
          placeholderTextColor='white'
          maxLength={50}
          value={user}
          onChange={()=>{ if(user){setEmpty("")} }}
          onChangeText={text=>setUser(text)}
          onBlur={()=>{  if(!user) {setEmpty("Email or User Name can't be blank")} }}
          keyboardType='email-address'
          style={styles.input}
         />
         <Text style={styles.error}> {empty} </Text>
        <TextInput 
          placeholder="Password"
          placeholderTextColor='white'
          maxLength={15}
          secureTextEntry={true}
          value={pwd}
          onChange={()=>{ if(pwd){setError("")} }}
          onChangeText={text=>setPwd(text)}
          style={styles.input}
         />
         <Text style={styles.error}>{error}</Text>
       <Mybutton onPress={onPressHandler}/>
      </View>
     <View style={{justifyContent:'flex-end', alignItems:'center', margin:20}}>
     <OtherLogin/>
     </View>
    </SafeAreaView>
 ); 
} 

const styles = StyleSheet.create({
     container:{ 
       flex:1,
    justifyContent:'center',
    alignItems:'center',
    width: wp('100')
    
} ,
title:{
  fontSize:40,
  marginBottom:15,
  fontWeight:'300',
  fontFamily:'verdana'
}, 
input:{
    borderColor:"#afafaf",
    borderRadius: hp('1%'),
    backgroundColor:'#d28cbd',
    borderWidth:0.9,
    width: wp('84%'),
    padding: hp('1%'),
    marginBottom:10,
    height: hp('6%'), fontSize:18
},
error:{
  alignSelf:'flex-start',
  marginHorizontal: 15,
  marginBottom:hp('1%')
}
}); 

export default App;





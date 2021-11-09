import React from 'react';  
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import Login from './Login';
import userWelcome from './userWelcome';
import userProfile from './userProfile';
import { StatusBar, Image } from 'react-native';
import C from '../Instagram/constants';
import logo from '../misc/'
const Main =() => {

    //const LoggedIn = false;    //to get from Async? 
    const stack = createNativeStackNavigator();
    
 return(
    <NavigationContainer>
        <StatusBar barStyle='dark-content'/>
        <stack.Navigator initialRouteName='Login'>
        <stack.Screen name="Login" component={Login} options={{headerShown:false, header:null}}/>
        <stack.Screen name="userWelcome" component={userWelcome} />
        <stack.Screen name="Profile" component={userProfile} options={{
            headerTitle: ()=>{ <Icon name='md-camera-outline' size={30} color={C.insta_grey}/> }, 
            headerLeft: ()=> <Icon name='md-camera-outline' size={30} color={C.insta_grey}/>, 
            headerRight: ()=> <Icon name='md-paper-plane-outline' size={30} color={C.insta_grey}/>     }}>
        </stack.Screen>
    </stack.Navigator>
</NavigationContainer>
 ); 
} 
export default Main;
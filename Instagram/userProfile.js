import React from 'react'; 
import {StyleSheet, Text,View} from 'react-native' 
//user profile insta, importing screens
import Feed from '../screens/feedInsta';
import Search from '../screens/searchInsta';
import AddPost from '../screens/addPost';
import Activity from '../screens/Activity';
import Profile from '../screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

const App =() => {

   const Tab = createBottomTabNavigator();

 return (
  <View style={styles.container}> 
    <Tab.Navigator 
       screenOptions={{tabBarActiveTintColor: 'tomato',}}
       >
       <Tab.Screen name="Feed" component={Feed} 
            options={{ headerShown: false,  
            tabBarIcon: ({focused})=>{ iconName= focused ? 'md-home' : 'md-home-outline';
              return <Icon name={iconName} size={25} color='tomato'/>; }
        }} />
       <Tab.Screen name="Search" component={Search} options={ {
            tabBarIcon: ({focused})=>{ iconName= focused ? 'md-search' : 'md-search-outline';
              return <Icon name={iconName} size={25} color='tomato'/>; }
        }}/>
       <Tab.Screen name="Add Post" component={AddPost} options={ {
            tabBarIcon: ({focused})=>{ iconName= focused ? 'add' : 'md-add-outline';
              return <Icon name={iconName} size={30} color='tomato'/>; }
        }}/>
       <Tab.Screen name="Activity" component={Activity} options={{ headerTitle:'Notifications',
            tabBarIcon: ({focused})=>{ iconName= focused ? 'md-heart' : 'md-heart-outline';
              return <Icon name={iconName} size={25} color='tomato'/>; }
        }}/>
       <Tab.Screen name="Me" component={Profile} options={{ headerTitle:'Profile',
            tabBarIcon: ({focused})=>{ iconName= focused ? 'md-person' : 'md-person-outline';
              return <Icon name={iconName} size={25} color='tomato'/>; }
        }}/>

    </Tab.Navigator>
  </View>
 ); 
} 

const styles = StyleSheet.create({
     container:{
       paddingTop:5,
       flex:1,
       marginBottom:10
      } 
}); 

export default App;
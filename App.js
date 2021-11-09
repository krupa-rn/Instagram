

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import Intro from './screens/intro';
 
function App() {
  const [user, setUser] = useState({});

  const findUser = async() =>{
    const result = await AsyncStorage.getItem('user');
    setUser(JSON.parse(result));
    
  }
  useEffect(()=>{
    findUser()
  }, [])
  return <NoteScreen user ={user} />
}

const styles = StyleSheet.create({
  container:{

  }
});

export default App;

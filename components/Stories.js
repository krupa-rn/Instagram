//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const data = [
    { uri:'https://picsum.photos/300',
      name:'abc',
      id:'1'
    },
    {  uri:'https://picsum.photos/500?random=25',
     name:'def', id:'2'
    },
    {  uri:'https://picsum.photos/350?random=0',
      name:'ghi', id:'3'
    },
    { uri:'https://picsum.photos/250',
     name:'jkl',id:'4'
    },
    {  uri:'https://picsum.photos/239?random=2',
     name:'mno', id:'5'
    },
    { uri:'https://picsum.photos/400?random=1',
    name:'pqr', id:'6'
   }
];
const MyComponent = () => {
  const list = data;

  const ProfilePic = ({uri, name}) => {
    return (
        <View >
        <View style={styles.Imagecontainer}>
            <Image source={{uri: uri}} 
             style={styles.storyImage}
             resizeMode='center' /> 
        </View>
          <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'black',fontSize:13 }}>{name}</Text>
          </View>
        </View>
    );
};
  
    return (
        <View style={styles.container}>
          <View style={{height:74, width:74, justifyContent:'center', margin:2}}>
          
             <Image source={{uri:'https://picsum.photos/400?random=10'}}
              style={{height: wp('15%'), width: wp('15%'), borderRadius: wp('7.5%'), margin:2}}/>
            <Icon name="pluscircle" size={18} color="skyblue" style={styles.addStory}/>
            <Text style={{color:'gray', fontSize:12 }}> Your Story</Text>
          </View>

          {/* rendering all stories */}
            <FlatList 
              data= {list}
              renderItem={({item})=>
                <ProfilePic name={item.name} uri={item.uri} /> }
                 showsHorizontalScrollIndicator={false}

              //StickyHeaderComponent={header}
              //ListHeaderComponent={header}  //not working in horizontal 
              stickyHeaderIndices={[0]}
              horizontal
              style={styles.stories} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        //flex: 0.22,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
       
      },
    stories: {
       flex:1, 
     
    },
    storyImage:{
       width : wp('15%'),
       height: wp('15%'),
        borderRadius: wp('8.5%'),
        borderWidth:1,
        borderColor:'#ffffff'
    },
   Imagecontainer:{
    height: wp('17%'), 
    width: wp('17%'), 
    borderRadius: wp('8.5%'),

    borderColor:'#ae22e0',
    borderWidth:3,
    margin:5
   }, 
   addStory:{
      marginTop:-15,
      marginLeft: wp('12.5%'),
      marginBottom:5,
      //backgroundColor:'blue'

   }
});

//make this component available to the app
export default MyComponent;

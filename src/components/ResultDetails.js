import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';

const ResultDetails=({result})=>{
  
  return <View  style={styles.wrapper}>
  <Image style={styles.image} source={{ url:result.image_url }} />
  <Text style={styles.name}>{result.name}</Text>
  <Text style={styles.secondary}>{result.rating} stars, {result.review_count} </Text></View>
}
const styles =StyleSheet.create({
  wrapper:{
    marginHorizontal:10
  },
  image:{
    width:200,
    height:100,
    borderRadius:4
  },
  name:{
    fontSize:15,
    fontWeight:500
  },
  secondary:{
    color:"#3a3a3a",
    
  }
})
export default ResultDetails
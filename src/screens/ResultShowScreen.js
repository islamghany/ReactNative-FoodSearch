import React,{useState,useEffect} from 'react';
import {Text,StyleSheet,View,FlatList,Image} from 'react-native';
import yelp from '../api/yelp'
const ResultShowScreen=({navigation})=>{
  const [results,setResults]=useState({})
  const id=navigation.getParam('id');
  const getResult= async (id)=>{
      const respond = await yelp.get(`/${id}`);
      setResults(respond.data)  
  }
useEffect(()=>{
  getResult(id)
},[])
if(!results) return null
 return <View>
 <Text>{results.name}</Text>
 <FlatList 
 data={results.photos}
 keyExtractor={(e)=>e}
 renderItem={({item})=>{
   return <Image source={{url:item}} style={styles.image} />
 }}
  />
 </View>
}
const styles = StyleSheet.create({
  image:{
    width:200,
    height:120
  }
});

export default ResultShowScreen;
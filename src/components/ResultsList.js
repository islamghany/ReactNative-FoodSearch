import React from 'react';
import {Text,View,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultDetails from './ResultDetails';
import {withNavigation} from 'react-navigation'

const ResultsList=({title,results,navigation})=>{
  if(!results.length) return null
  return <View style={{marginBottom:15}}>
  <Text style={styles.heading}>{title}</Text>
  <FlatList horizontal 
  showsHorizontalScrollIndicator={false}
  data={results}
  keyExtractor={(item)=>item.id} 
  renderItem={({item})=>{
    return <TouchableOpacity
     onPress={()=>navigation.navigate('ResultShow',{id:item.id})}>
     <ResultDetails result={item} />
     </TouchableOpacity>
  }}
  /> 
  </View>
}
const styles=StyleSheet.create({
  heading:{
    fontSize:18,
    fontWeight:400,
    textTransform:"capitalize",
    letterSpacing:1,
    marginBottom:8,
    marginLeft:10
  } 
})
export default withNavigation(ResultsList);
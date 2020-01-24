import React from 'react';
import {TextInput,View,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar=({term,onTermChange,onSubmit})=>{
  
  return <View style={styles.background}>
  <Feather 
  style={styles.icon}
  name="search" />
  <TextInput
   onChangeText={(e)=>onTermChange(e)}
   value={term} style={styles.input}
   placeholder="Search"
   autoCapitalize='none'
   onEndEditing={()=>onSubmit()} />
  </View>
}
const styles=StyleSheet.create({
  background:{
    backgroundColor:"#f0f0f0",
    height:50,
    marginHorizontal:15,
    marginVertical:10,
    borderRadius:25,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    overflow:"hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  icon:{
      fontSize:25,
      paddingHorizontal:5,
      paddingLeft:20
  },
  input:{
    flex:1,
    height:"100%",
    fontSize:16,
    borderColor:"transparent",
    marginRight:10
  }
})
export default SearchBar;
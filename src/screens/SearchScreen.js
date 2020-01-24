import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen=()=>{
  const [term,setTerm]=useState('');
  const [searchApi ,results,error]=useResults();
  const filterByPrice=(price)=>{
    if(results)
     return results.filter(item => {return item.price === price})
  }
  return <View style={{flex:1}}>
  <SearchBar onSubmit={()=>searchApi(term)} term={term} onTermChange={(e)=>setTerm(e)}  />
  {error.length ? <Text>{error}</Text> :null}
   <ScrollView>
   <ResultsList  title="Cost Effective" results={filterByPrice('$')}/>
   <ResultsList  title="bit pricer" results={filterByPrice('$$')} />
   <ResultsList  title="big spender" results={filterByPrice('$$$')} />
  </ScrollView>
  </View>
}
export default SearchScreen;
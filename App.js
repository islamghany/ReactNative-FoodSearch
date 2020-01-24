import {createStackNavigator ,createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen'
import ResultShowScreen from './src/screens/ResultShowScreen'


const navigator=createStackNavigator({
  Search:SearchScreen,  
  ResultShow:ResultShowScreen, 
},{
  initialRouteKey: 'Search',
  defaultNavigationOptions:{
    title:'Bussiness Search'
  }
});
export default createAppContainer(navigator)
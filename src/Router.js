import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation';



import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import AboutModal from './screens/AboutModal'

const MainStack = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen
}, {
  initialRouteName: "Home",
  headerLayoutPreset: "center",
  defaultNavigationOptions: {
    headerBackTitle: null,
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  },
});

 const ModalStack = createStackNavigator({
  Main:MainStack,
  Modal:AboutModal

},{
  mode:'model',
  headerMode:'none'
});


export default createAppContainer(ModalStack);

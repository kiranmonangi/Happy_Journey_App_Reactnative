import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import FlightResult from './src/screens/FlightResult';
import UserDetails from './src/screens/UserDetails';
import Booking from './src/screens/Booking';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Result:FlightResult,
    Details:UserDetails,
    Book:Booking,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: '',
    },
  }
);

export default createAppContainer(navigator);

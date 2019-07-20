import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
// import Icon from 'react-native-vector-icons/Ionicons';

const App = createStackNavigator({
  Login: { screen:LoginScreen },
});

export default createAppContainer(App);

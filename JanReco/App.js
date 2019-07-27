import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import ScoreListScreen from './src/screens/ScoreListScreen';

const App = createStackNavigator({
  ScoreList: { screen: ScoreListScreen },
  Login: { screen: LoginScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'JanReco',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#40A698',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});
export default createAppContainer(App);

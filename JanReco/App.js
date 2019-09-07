import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ScoreListScreen from './src/screens/ScoreListScreen';
import ScoreInfoScreen from './src/screens/ScoreInfoScreen';
import TeamListScreen from './src/screens/TeamListScreen';
import TeamInfoScreen from './src/screens/TeamInfoScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  ScoreList: { screen: ScoreListScreen },
  ScoreInfo: { screen: ScoreInfoScreen },
  TeamList: { screen: TeamListScreen },
  TeamInfo: { screen: TeamInfoScreen },
  Profile: { screen: ProfileScreen },
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

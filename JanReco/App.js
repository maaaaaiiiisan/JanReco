import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import ScoreListScreen from './src/screens/ScoreListScreen';

const App = createStackNavigator({
    ScoreList: {screen: ScoreListScreen  },
    Login: { screen:LoginScreen },
});

export default createAppContainer(App);

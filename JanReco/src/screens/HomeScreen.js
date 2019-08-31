import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

class HomeScreen extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return(
      <View>
        <Button
          title="Go to ScoreListScreen"
          onPress={() => navigate('ScoreList')}
        />
        <Button
          title="Go to LoginScreen"
          onPress={() => navigate('Login')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({

});

export default HomeScreen;

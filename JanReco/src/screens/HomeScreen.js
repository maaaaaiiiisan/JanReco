import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

class HomeScreen extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return(
      <View>
        <Button
          title="Go to ScoreList"
          onPress={() => navigate('ScoreList')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({

});

export default HomeScreen;

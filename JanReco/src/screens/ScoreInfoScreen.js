import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ScoreInfoScreen extends React.Component {
  render(){
    return(
      <View style={styles.teamInfo}>
        <View>
          <Text style={styles.teamName}>チーム中学</Text>
        </View>
        <View style={styles.teamDetail}>
          <Text>ID：ABC123</Text>
          <Text>2019/07/21</Text>
        </View>
      </View>
      
    );
  }
}
const styles= StyleSheet.create({
  teamInfo: {
    flexDirection: 'row',
  },
  teamName: {
    fontSize: 20,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  teamDetail: {
    paddingRight: 5,
    paddingTop: 20,
  },
});
export default ScoreInfoScreen;

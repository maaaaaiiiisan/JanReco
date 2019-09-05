import React from 'react';
import { StyleSheet, View, Text, ListView } from 'react-native';
import CircleButton from '../elements/CircleButton';

class ScoreInfoScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.info}>
          <View style={styles.teamInfo}>
            <Text style={styles.teamName}>チーム中学</Text>
          <View style={styles.teamDetail}>
            <Text>ID：ABC123</Text>
            <Text>2019/07/21</Text>
          </View>
        </View>
        </View>
        <View>
        </View>
        <CircleButton name="edit" />
      </View>
    );
  }
}
const styles= StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  info: {
    flex: 1,
  },
  teamInfo: {
    flexDirection: 'row',
    borderBottomWidth:  1,
    borderBottomColor: '#40A698',
    height: 70,
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
    paddingLeft: 50,
    paddingTop: 20,
  },
});
export default ScoreInfoScreen;

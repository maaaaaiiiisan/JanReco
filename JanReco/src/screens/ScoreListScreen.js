import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import CircleButton from '../elements/CircleButton';

class ScoreListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <Text style={styles.menu_title}>すべて</Text>
          <Text style={styles.menu_title}>参加済みチーム</Text>
          <Text style={styles.menu_title}>参加済み卓</Text>
        </View>
        <View style={styles.scorelist}>
          <Text style={styles.scorelist_name}>チーム 中学</Text>
          <Text style={styles.scorelist_info}>試合数3回・2019/07/21 17:21</Text>
        </View>
        <View style={styles.scorelist}>
          <Text style={styles.scorelist_name}>チーム 中学</Text>
          <Text style={styles.scorelist_info}>試合数3回・2019/07/21 17:21</Text>
        </View>
        <View style={styles.scorelist}>
          <Text style={styles.scorelist_name}>チーム 中学</Text>
          <Text style={styles.scorelist_info}>試合数3回・2019/07/21 17:21</Text>
        </View>
        <CircleButton />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7d8d8',
    width: '100%',
  },
  menu: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 60,
    borderColor: '#787c7b',
    borderBottomWidth: 1,
  },
  menu_title: {
    padding: 20,
    fontWeight: '400',
  },
  scorelist: {
    backgroundColor: '#fff',
    padding: 20,
    height: 80,
    borderColor: '#787c7b',
    borderBottomWidth: 0.5,
  },
  scorelist_name: {
    fontSize: 20,
    paddingBottom: 5,
  },
  scorelist_info: {
    color: '#787c7b',
  },
});

export default ScoreListScreen;

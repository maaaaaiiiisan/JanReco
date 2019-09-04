import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class TeamListScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <Button style={styles.menu_title} title="参加卓" color="#000000" />
          <Button
            style={styles.menu_title}
            title="チーム一覧"
            color="#000000"
            onPress={() => navigate('TeamList')}
          />
        </View>
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
    paddingTop: 15,
    paddingLeft: 10,
    borderColor: '#787c7b',
    borderBottomWidth: 1,
    fontWeight: 'bold',
  },
});
export default TeamListScreen;

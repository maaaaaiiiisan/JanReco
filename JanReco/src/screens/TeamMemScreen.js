import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class TeamMemScreen extends React.Component {
  render() {
    return(
      <View>
        <Text style={styles.memListTitle}>チームメンバー</Text>
        <View style={styles.memList}>
          <Icon name="user" style={styles.icon} />
          <Text style={styles.memListText}>しゅん</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memListTitle: {
    fontSize: 20,
    margin: 20,
  },
  memList: {
    flexDirection: 'row',
    margin: 5,
  },
  icon: {
    justifyContent: 'center',
    fontSize: 25,
    marginLeft: 10,
    marginRight: 10,
    color: '#40A698',
  },
  memListText: {
    fontSize: 18,
    marginBottom: 10,
    paddingTop: 3,
  },
});

export default TeamMemScreen;

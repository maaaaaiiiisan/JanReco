import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class TeamInfoScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.teamName}>#チーム中学</Text>
        <View style={styles.teamMenu}>
          <Icon name="sun" style={styles.icon} />
          <Text style={styles.teamMenuText}>メンバーリスト</Text>
        </View>
        <View style={styles.teamMenu}>
          <Icon name="user-plus" style={styles.icon} />
          <Text style={styles.teamMenuText}>招待</Text>
        </View>
        <View style={styles.teamMenu}>
          <Icon name="x-square" style={styles.icon} />
          <Text style={styles.teamMenuText}>グループを退会</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  teamName: {
    fontSize: 20,
    margin: 20,
  },
  teamMenu: {
    flexDirection: 'row',
    borderColor: '#787c7b',
    borderBottomWidth: 1,
    fontWeight: 'bold',
    margin: 5,
  },
  icon: {
    justifyContent: 'center',
    fontSize: 25,
    marginLeft: 10,
    marginRight: 10,
    color: '#40A698',
  },
  teamMenuText: {
    fontSize: 18,
    marginBottom: 10,
    paddingTop: 3,
  },
});

export default TeamInfoScreen;

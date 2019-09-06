import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import TabNavigation from '../components/TabNavigation';
import CircleButton from '../elements/CircleButton';
import Icon from 'react-native-vector-icons/Feather';


class TeamListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TabNavigation navigation={this.props.navigation}　/>
          <View>
            <Text style={styles.title}>招待されているチーム</Text>
          </View>
          <TouchableOpacity style={styles.teamInvited} onPress={() => navigate('TeamList')}>
            <Text style={styles.teamName}>チーム高校</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>参加済みチーム</Text>
          </View>
          <TouchableOpacity style={styles.team} onPress={() => navigate('TeamList')}>
            <Text style={styles.teamName}>チーム中学</Text>
            <Icon name="menu"  style={styles.teamIcon}/>
          </TouchableOpacity>
        <CircleButton name="plus" />
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
  title: {
    padding: 5,
    height: 30,
    backgroundColor: '#E5E5E5',
  },
  team: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 15,
    borderColor: '#787c7b',
    borderBottomWidth: 1,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
  teamInvited: {
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 15,
    borderColor: '#787c7b',
    borderBottomWidth: 1,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
  teamName: {
    width: 280,
    fontSize: 20,
  },
  teamIcon: {
    justifyContent: 'center',
    fontSize: 25,
    marginLeft: 20,
    color: '#787c7b',
  },
});
export default TeamListScreen;

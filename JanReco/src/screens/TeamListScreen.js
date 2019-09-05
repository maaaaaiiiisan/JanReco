import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import TabNavigation from '../components/TabNavigation';


class TeamListScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <TabNavigation navigation={this.props.navigation}　/>
        <View style={styles.menu}>
          <Button
            style={styles.menu_title}
            title="チーム中学"
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
    height: 60,
    paddingTop: 15,
    paddingLeft: 10,
    borderColor: '#787c7b',
    borderBottomWidth: 1,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
});
export default TeamListScreen;

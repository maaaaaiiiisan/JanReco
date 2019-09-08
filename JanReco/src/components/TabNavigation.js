import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Feather';

export default class TabNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <View style={styles.menu}>
          <TouchableOpacity
              style={[styles.menu_title, styles.selected_menu_title]}
              onPress={() => { this.props.navigation.navigate('ScoreList')}}
            >
              <Icon style={styles.menu_icon}　name="activity" />
              <Text style={styles.menu_text}>アクティビティ</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.menu_title}
              onPress={() => { this.props.navigation.navigate('TeamList')}}
            >
              <Icon style={styles.menu_icon}　name="users" />
              <Text style={styles.menu_text}>チーム</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.menu_title}
              onPress={() => { this.props.navigation.navigate('TeamList')}}
            >
              <Icon style={styles.menu_icon}　name="check-circle" />
              <Text style={styles.menu_text}>卓作成</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.menu_title}
              onPress={() => { this.props.navigation.navigate('Profile')}}
            >
              <Icon style={styles.menu_icon}　name="settings" />
              <Text style={styles.menu_text}>アカウント</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingTop: 15,
    paddingLeft: 10,
    borderColor: '#787c7b',
    borderBottomWidth: 1,
    fontWeight: 'bold',
  },
  menu_text: {
    fontSize: 13,
  },
  menu_title: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 10,
    width: '20%',
  },
  menu_icon: {
    fontSize: 30,
    color: '#40A698',
    marginBottom: 5,
  },
});

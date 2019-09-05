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
          <View style={styles.profile}>
            <Image style={styles.profilePhoto} source={require('../../assets/image/profile.png')} />
            <View>
              <Text style={styles.profileName}>Mai</Text>
            </View>
          </View>
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
              <Icon style={styles.menu_icon}　name="user-plus" />
              <Text style={styles.menu_text}>チーム</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  profile: {
    paddingTop: 20,
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  profilePhoto: {
    height: 80,
    width: 80,
  },
  profileName: {
    padding: 20,
    fontSize: 20,
    fontWeight: '400',
  },
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
    width: '50%',
  },
  menu_icon: {
    fontSize: 30,
    color: '#40A698',
    marginBottom: 5,
  },
});

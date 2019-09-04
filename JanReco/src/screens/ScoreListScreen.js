import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Image, TouchableOpacity } from 'react-native';

import ScoreList from '../components/ScoreList';
import CircleButton from '../elements/CircleButton';
import ModalRadio from '../components/ModalRadio';
import Icon from 'react-native-vector-icons/Feather';

export default class ScoreListScreen extends Component {
  state = { table_info: []};

  componentWillMount() {
    return fetch('https://api.myjson.com/bins/1bhw4d')
    .then((response) => response.json())
    .then((responseJson) => {
    this.setState({
      table_info: responseJson.table_info,
      user_id: responseJson.user_id
    });
  })
  .catch((error) =>{
        console.error(error);
      });
  }

renderScoreLists(){
  return this.state.table_info.map(info =>
    <ScoreList key={info.table_id} info={info} navigation={this.props.navigation}/>
  );
}


render(){
  const {navigate} = this.props.navigation;
  return(
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.profilePhoto} source={require('../../assets/image/profile.png')} />
        <View>
          <Text style={styles.profileName}>Mai</Text>
        </View>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menu_title}>
          <Icon style={styles.menu_icon}　name="activity" />
          <Text style={styles.menu_text}>アクティビティ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu_title}  onPress={() => navigate('TeamList')}>
          <Icon style={styles.menu_icon}　name="user-plus" />
          <Text style={styles.menu_text}>チーム</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {this.renderScoreLists()}
      </ScrollView>
      <CircleButton name="filter" />
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
  scorelist: {
    backgroundColor: '#fff',
    padding: 20,
    height: 80,
    borderColor: '#787c7b',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
  },
  scorelist_firstLine: {
    flexDirection: 'row',
  },
  scorelist_name: {
    fontSize: 16,
    paddingBottom: 5,
  },
  scorelist_score: {
    fontSize: 20,
    alignSelf: 'flex-end',
    textAlign: 'right',
    marginLeft: 120,
  },
  scorelist_info: {
    color: '#787c7b',
  },
});

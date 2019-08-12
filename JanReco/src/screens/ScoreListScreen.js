import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';

import ScoreList from '../components/ScoreList';
import CircleButton from '../elements/CircleButton';
import ModalRadio from '../components/ModalRadio';

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
    <ScoreList key={info.table_id} info={info} />
  );
}
renderModalRadio(){
  return this.state.table_info.map(radioInfo =>
    <ModalRadio key={radioInfo.table_id} radioInfo={radioInfo} />
  );
}

render(){
  return(
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.menu_title}>すべて</Text>
        <Text style={styles.menu_title}>チーム一覧</Text>
      </View>
      <ScrollView>
        {this.renderScoreLists()}
      </ScrollView>
      <CircleButton />
        {this.renderModalRadio()}
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
    color: '#313131',
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

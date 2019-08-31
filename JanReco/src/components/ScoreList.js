import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class ScoreList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.scorelist} activeOpacity={0.7}>
        <View>
          <Text style={styles.scorelist_name}>
            チーム
            { this.props.info.team_info.name }
          </Text>
          <Text style={styles.scorelist_info}>
            試合
            { this.props.info.times }
            回・
            { this.props.info.date }
          </Text>
        </View>
        <View>
        <Text style={styles.scorelist_score}>
          { this.props.info.my_info.score }
          pt
        </Text>
        <Text style={styles.scorelist_score}>
          Ave.
          { this.props.info.my_info.rank }
        </Text>
      </View>
      <Icon name="chevron-right" style={styles.moreIcon}/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  scorelist: {
    backgroundColor: '#fff',
    padding: 20,
    height: 80,
    borderColor: '#787c7b',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
  },
  scorelist_name: {
    fontSize: 20,
    paddingBottom: 5,
  },
  scorelist_score: {
    fontSize: 18,
    alignSelf: 'flex-end',
    textAlign: 'right',
    marginLeft: 100,
  },
  scorelist_info: {
    color: '#787c7b',
  },
  moreIcon: {
    justifyContent: 'center',
    fontSize: 35,
    marginLeft: 20,
    color: '#787c7b',
  },
});

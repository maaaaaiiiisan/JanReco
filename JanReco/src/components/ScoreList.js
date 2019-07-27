import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ScoreList extends React.Component {
  constructor(){
    super();
    this.state = {
      name: null,
      score: null,
      err:null,
    }
  }
  baseURL: 'http://myjson.com/13zb85';
  getDate = (ev) => {
    let req = new Request (url,{
      method: 'GET'
    });
    fetch(req)
    .then(response => response.json())
    .then(this.showData)
    .cathch(this.badStuff)
  }
  showData = (data) => {
    console.log(data);
  }
  badStuff = (err) =>{
    this.setState({error: err.message});
  }
  render() {
    const {teamName, times, date, score } = this.props.socreList
    return (
      <View style={styles.scorelist}>
        <View>
          <Text style={styles.scorelist_name}>チーム 中学</Text>
          <Text style={styles.scorelist_info}>試合数3回・2019/07/21 17:21</Text>
        </View>
        <Text style={styles.scorelist_score}>50点</Text>
      </View>
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
  scorelist_firstLine: {
    flexDirection: 'row',
  },
  scorelist_name: {
    fontSize: 20,
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

export default ScoreList;

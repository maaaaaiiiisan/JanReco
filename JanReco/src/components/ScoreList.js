import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ScoreList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loaded: true,
      error: null
    }
  }
  baseURL = 'https://api.myjson.com';
  getData = (ev)=> {
    this.setState({loaded:false, error:null});
    let url = this.baseURL + '/bins/8gh25';
    let h = new Headers();
    let req = new Request(url, {
      hedaers: h,
      method: 'GET'
    });
    fetch(req)
    .then(response => response.json())
    .then(this.showData)
    .catch(this.badStuff)
  }
  showData = (data) =>{
    this.setState({loaded:true, data});
  }
  badStuff = (err) => {
    this.setState({loaded:true, error:err.message});
  }
  componentDidMount(){
  }
  render() {
    return (
      <View style={styles.scorelist}>
        <View>
            {this.state.data && this.state.data.length > 0 && (
              this.state.data.map( responseJson => (
                <Text key={responseJson.id} style={styles.scorelist_name}>
                  チーム{ responseJson.name }
                </Text>
              ))
            )}
            {this.state.data && this.state.data.length > 0 && (
              this.state.data.map( responseJson => (
                <Text key={responseJson.id} style={styles.scorelist_info}>
                  試合数{ responseJson.times }回・{responseJson.date}
                </Text>
              ))
            )}
        </View>
        <Button title="Get Data" onPress={this.getData} />
        {this.state.error && (
          <Text style={styles.menu_title}>{this.state.error}</Text>
        )}
        {this.state.data && this.state.data.length > 0 && (
          this.state.data.map( responseJson => (
            <Text key={responseJson.id} style={styles.scorelist_score}>
              {responseJson.score}点
            </Text>
          ))
        )}
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

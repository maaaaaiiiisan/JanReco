import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import ScoreList from '../components/ScoreList';
import CircleButton from '../elements/CircleButton';
import TabNavigation from '../components/TabNavigation';
import ModalRadio from '../components/ModalRadio';
import Modal from "react-native-modal";

export default class ScoreListScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  state = { table_info: []};

  componentWillMount = () => {
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

  renderScoreLists = () => {
    return this.state.table_info.map(info =>
      <ScoreList key={info.table_id} info={info} navigation={this.props.navigation}/>
    );
  }

  openModal = () => {
    this.setState({ isModalVisible: 'bottom' });
  }


  renderModalRadio = () => {
    return this.state.table_info.map(radioInfo =>
      <ModalRadio key={radioInfo.table_id} radioInfo={radioInfo} />
    );
  }

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <TabNavigation navigation={this.props.navigation}　/>
        <ScrollView>
          {this.renderScoreLists()}
        </ScrollView>
        <CircleButton name="filter" onPress={ this.openModal } />
        <Modal
          onBackdropPress={() => this.setState({ isModalVisible: false })}
          isVisible={this.state.isModalVisible === 'bottom'}
          onSwipeComplete={() => this.setState({ visibleModal: null })}
          swipeDirection={['up', 'left', 'right', 'down']}
          style={styles.bottomModal}
          >
          <View style={styles.modal}  >
            <Text style={styles.modalTitle}>期間で絞り込む</Text>
            {this.renderModalRadio()}
          </View>
        </Modal>
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
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modal: {
    backgroundColor: '#fff',
    flex: 0.3,
  },
  modalTitle: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 13,
  },
});

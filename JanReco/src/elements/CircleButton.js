import React from 'react';
import { StyleSheet, Button, View, Text, TouchableHighlight, } from 'react-native';
import ScoreList from '../components/ScoreList';
import Icon from 'react-native-vector-icons/Feather';
import Modal from "react-native-modal";
import ModalRadio from '../components/ModalRadio';


export default class CircleButton extends React.Component {
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

  renderModalRadio(){
    return this.state.table_info.map(radioInfo =>
      <ModalRadio key={radioInfo.table_id} radioInfo={radioInfo} />
    );
  }

  render () {
    return (
      <View>
        <TouchableHighlight style={styles.container}　onPress={() => this.setState({ isModalVisible: 'bottom' })}>
          <View style={styles.circleButton}>
            <Icon name="filter"  style={styles.circleButtonTitle}/>
          </View>
        </TouchableHighlight>
        <Modal
          onBackdropPress={() => this.setState({ isModalVisible: false })}
          isVisible={this.state.isModalVisible === 'bottom'}
          onSwipeComplete={() => this.setState({ visibleModal: null })}
          swipeDirection={['up', 'left', 'right', 'down']}
          style={styles.bottomModal}>
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
    width: 55,
    height: 55,
    bottom: 32,
    right: 32,
    position: 'absolute',
  },
  circleButton: {
    width: 55,
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontSize: 35,
    color: '#40A698',
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

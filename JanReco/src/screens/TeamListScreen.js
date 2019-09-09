import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import TabNavigation from '../components/TabNavigation';
import CircleButton from '../elements/CircleButton';
import Icon from 'react-native-vector-icons/Feather';
import Modal from "react-native-modal";
import ModalSelect from '../components/ModalSelect';
import ListWithTitle from '../components/ListWithTitle';


class TeamListScreen extends React.Component {
  state = {
    isModalVisible: false
  };

  loadModal = () => {
    this.setState({ isModalVisible: 'bottom' })
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TabNavigation navigation={this.props.navigation}　/>
        <ListWithTitle
          listTitle="招待されているチーム"
          itemName="チーム高校"
          onPress={this.loadModal}
          showIcon={false}
        />
        <ListWithTitle
          listTitle="参加済みチーム"
          itemName="チーム中学"
          onPress={this.loadModal}
          showIcon={true}
        />
        <CircleButton name="plus" />
        <Modal
          isVisible={this.state.isModalVisible === 'bottom'}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
          onSwipeComplete={() => this.setState({ visibleModal: 'default' })}
          >
          <ModalSelect modalTitle="チームに参加しますか"/>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7d8d8',
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
export default TeamListScreen;

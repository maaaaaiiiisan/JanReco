import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import TabNavigation from '../components/TabNavigation';
import CircleButton from '../elements/CircleButton';
import Icon from 'react-native-vector-icons/Feather';
import Modal from "react-native-modal";
import ModalSelect from '../components/ModalSelect';


class TeamListScreen extends React.Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TabNavigation navigation={this.props.navigation}　/>
        <View>
          <Text style={styles.title}>招待されているチーム</Text>
        </View>
        <TouchableOpacity style={styles.team} onPress={() => this.setState({ isModalVisible: 'bottom' })}>
          <Text style={styles.teamName}>チーム高校</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>参加済みチーム</Text>
        </View>
        <TouchableOpacity style={styles.team} onPress={() => navigate('TeamInfo')}>
          <Text style={styles.teamName}>チーム中学</Text>
          <Icon name="menu"  style={styles.teamIcon}/>
        </TouchableOpacity>
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
  title: {
    padding: 5,
    height: 30,
    backgroundColor: '#E5E5E5',
  },
  team: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 15,
    borderColor: '#787c7b',
    borderBottomWidth: 1,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
  teamName: {
    width: 280,
    fontSize: 20,
  },
  teamIcon: {
    justifyContent: 'center',
    fontSize: 25,
    marginLeft: 20,
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
export default TeamListScreen;

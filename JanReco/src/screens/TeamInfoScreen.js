import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import ModalSelect from '../components/ModalSelect';

class TeamInfoScreen extends React.Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text style={styles.teamName}>#チーム中学</Text>
        <TouchableOpacity
          style={styles.teamMenu}
          onPress={() => navigate('TeamMem')}>
          <Icon name="sun" style={styles.icon} />
          <Text style={styles.teamMenuText}>メンバーリスト</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.teamMenu}
          onPress={() => navigate('TeamInvite')}>
          <Icon name="user-plus" style={styles.icon} />
          <Text style={styles.teamMenuText}>招待</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.teamMenu}
          onPress={() => this.setState({ isModalVisible: 'bottom' })}>
          <Icon name="x-square" style={styles.icon} />
          <Text style={styles.teamMenuText}>グループを退会</Text>
        </TouchableOpacity>
        <Modal
          isVisible={this.state.isModalVisible === 'bottom'}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
          onSwipeComplete={() => this.setState({ visibleModal: 'default' })}
          >
          <View style={styles.modal}  >
            <Text style={styles.modalTitle}>チームを退会しますか</Text>
            <View style={styles.buttonSelect}>
              <Button title="はい" />
              <Button title="いいえ" />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  teamName: {
    fontSize: 20,
    margin: 20,
  },
  teamMenu: {
    flexDirection: 'row',
    borderColor: '#787c7b',
    borderBottomWidth: 1,
    fontWeight: 'bold',
    margin: 5,
  },
  icon: {
    justifyContent: 'center',
    fontSize: 25,
    marginLeft: 10,
    marginRight: 10,
    color: '#40A698',
  },
  teamMenuText: {
    fontSize: 18,
    marginBottom: 10,
    paddingTop: 3,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modal: {
    backgroundColor: '#fff',
    flex: 0.3,
    margin: 30,
  },
  modalTitle: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 70,
    paddingBottom: 15,
  },
  buttonSelect: {
    flexDirection: 'row',
    color: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TeamInfoScreen;

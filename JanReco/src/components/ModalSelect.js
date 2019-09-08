import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class ModalSelect extends React.Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  redner(){
    return(
      <View>
      </View>

    );
  }
}
const styles = StyleSheet.create({

});

export default ModalSelect;

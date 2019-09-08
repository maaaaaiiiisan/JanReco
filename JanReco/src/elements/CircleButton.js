import React from 'react';
import { StyleSheet, Button, View, Text, TouchableHighlight, } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import ModalRadio from '../components/ModalRadio';

export default class CircleButton extends React.Component {

  render () {
    const { name } = this.props;
    const { onPress } = this.props;

    return (
      <View>
        <TouchableHighlight
          style={styles.container}
          underlayColor="transparent"
          onPress = { onPress } >
          <View style={styles.circleButton}>
            <Icon name={name}  style={styles.circleButtonTitle}/>
          </View>
        </TouchableHighlight>
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

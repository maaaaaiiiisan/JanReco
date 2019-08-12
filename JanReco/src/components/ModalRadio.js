import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ModalRadio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.modal}  >
        <Text style={styles.modalTitle}>期間で絞り込む</Text>
        <TouchableOpacity>
          <View style={styles.checkedCircle} />
        </TouchableOpacity>
        <Text>
            { this.props.radioInfo.date }ひにち
          </Text>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#fff',
    flex: 0.3,
  },
  modalTitle: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 13,
  },
  modalRadio: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#794F9B',
  },
});

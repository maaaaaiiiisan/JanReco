import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default class ModalRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    const { value } = this.state;
    return(
      <View style={styles.modalRadio} key={this.props.radioInfo.table_id}>
        <RadioButton
          value="first"
          style={styles.modalButtonUnchecked}
          onPress={() => {
            this.setState({
              value: this.props.radioInfo.table_id,
            });
          }}>
          {this.state.value === false && <View style={styles.modalButtonUnchecked} />}
          {this.state.value === this.props.radioInfo.table_id && <View style={styles.modalButtonChecked} />}
          <Text style={styles.modalText}>
            { this.props.radioInfo.date }
          </Text>
        </RadioButton>
      </View>
      );
    }
  }

const styles = StyleSheet.create({
  modalRadio: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalButton: {

  },
  modalButtonUnchecked: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#40A698',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 15,
  },
  modalButtonChecked: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#40A698',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 15,
  },
  modalText: {
    fontSize: 15,
    width: 100,
    marginLeft: 150,
    lineHeight: 15,
  },
});

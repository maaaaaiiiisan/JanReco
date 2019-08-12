import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ModalRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return(
      <View style={styles.modalRadio} key={this.props.radioInfo.table_id}>
        <TouchableOpacity style={styles.modalButton}
          onPress={() => {
            this.setState({
              value:true,
            });
          }}>
          {this.state.value === false && <View style={styles.modalButtonUnchecked} />}
          {this.state.value === true && <View style={styles.modalButtonChecked} />}

          <Text style={styles.modalText}>
            { this.props.radioInfo.date }
          </Text>
        </TouchableOpacity>
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
    flexDirection: 'row',
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#40A698',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 9,
  },
  modalText: {
    fontSize: 15,
  },
});

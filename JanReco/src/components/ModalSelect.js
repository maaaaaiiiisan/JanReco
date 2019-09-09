import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const ModalSelect = ({ modalTitle }) => {
  return(
    <View style={styles.modal}  >
      <Text style={styles.modalTitle}>{ modalTitle }</Text>
      <View style={styles.buttonSelect}>
        <Button title="はい" />
        <Button title="いいえ" />
      </View>
    </View>
    );
};
const styles = StyleSheet.create({
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

export default ModalSelect;

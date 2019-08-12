import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


var radio_props = [
  { label: '2019年7月', value: 0}
];

export default class ModalRadio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.modal}  >
      <Text style={styles.modalTitle}>期間で絞り込む</Text>
      <RadioForm style={styles.modalRadio} radio_props={radio_props}>
        {radio_props.map((obj, i) =>{
        <RadioButton labelHorizontal={true} key ={i}>
          <RadioButtonInput obj={obj} index={i} />
          <RadioButtonLabel obj={obj} index={i} />
        </RadioButton>
      })}
      </RadioForm>
      </View>
    )
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
});

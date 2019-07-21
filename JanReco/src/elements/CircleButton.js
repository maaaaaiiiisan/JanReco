import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class CircleButton extends React.Component {
  render () {
    return (
      <TouchableHighlight style={styles.container}>
      <View style={styles.circleButton}>
      <Icon name="filter"  style={styles.circleButtonTitle}/>
      </View>
      </TouchableHighlight>
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
});
export default CircleButton;

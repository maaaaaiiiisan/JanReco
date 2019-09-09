import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CircleButton =({ name, onPress }) => {
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

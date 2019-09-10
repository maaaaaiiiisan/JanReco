import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ListWithTitle = ({ listTitle, onPress, itemName, showIcon }) => {
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{ listTitle }</Text>
        </View>
        <TouchableOpacity style={styles.item} onPress={ onPress }>
          <Text style={styles.itemName}>{ itemName }</Text>
          { showIcon && <Icon name="menu"  style={styles.teamIcon}/> }
        </TouchableOpacity>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    padding: 5,
    backgroundColor: '#E5E5E5',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 15,
    borderColor: '#787c7b',
    borderBottomWidth: 1,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
  itemName: {
    width: 280,
    fontSize: 20,
  },
  teamIcon: {
    justifyContent: 'center',
    fontSize: 25,
    marginLeft: 20,
    color: '#787c7b',
  },
});

export default ListWithTitle;

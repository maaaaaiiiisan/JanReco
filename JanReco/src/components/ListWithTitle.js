import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class ListWithTitle extends React.Component {

  render() {
    const { listTitle } = this.props;
    const { itemName } = this.props;
    const { onPress } = this.props;
    return(
      <View>
        <View>
          <Text style={styles.title}>{ listTitle }</Text>
        </View>
        <TouchableOpacity style={styles.item} onPress={ onPress }>
          <Text style={styles.itemName}>{ itemName }</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    padding: 5,
    height: 30,
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
});

export default ListWithTitle;

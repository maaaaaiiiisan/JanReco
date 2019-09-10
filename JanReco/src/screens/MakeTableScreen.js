import React from 'react';
import { StyleSheet, View, Text, Picker } from 'react-native';


class MakeTableScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text>チームから立卓</Text>
        <View style={styles.selectTeam}>
          <Text>チームを選択</Text>
          <Picker>
            <Picker.Item label="中学" value="中学" />
          </Picker>
        </View>
        <Text>メンバーを選択して立卓</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  selectTeam: {
    flexDirection: 'row',
  },
});
export default MakeTableScreen;

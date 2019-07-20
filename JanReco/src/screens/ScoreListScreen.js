import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ScoreListScreen extends React.Component {
  render() {
    return (
      <View styles={styles.container}>
        <View styles={styles.header}>
        <Text>Hello, world!</Text>
        </View>
        <View styles={styles.menu}>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40A698',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#40A698',
    // height: 30,
    color: '#fff',
  },
  menu: {
    backgroundColor: '#fff',
    height: 30,
    color: '#313131',
  },
});

export default ScoreListScreen;

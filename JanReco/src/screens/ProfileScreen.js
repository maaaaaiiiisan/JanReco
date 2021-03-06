import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ListWithTitle from '../components/ListWithTitle';


class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image style={styles.profilePhoto} source={require('../../assets/image/profile.png')} />
          <View style={styles.profileRight}>
            <Text style={styles.profileName}>Mai</Text>
          </View>
        </View>
        <ListWithTitle listTitle="設定" itemName="名前を変更" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  profile: {
    paddingTop: 20,
    marginBottom: 10,
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  profilePhoto: {
    height: 80,
    width: 80,
  },
  profileRight: {
    flexDirection: 'row',
  },
  profileName: {
    padding: 20,
    fontSize: 20,
    fontWeight: '400',
    width: 230,
  },
  profileSetting: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 35,
    color: '#787c7b',
    marginTop: 15,
  },
});
export default ProfileScreen;

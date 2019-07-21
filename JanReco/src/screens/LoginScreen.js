import React from 'react';
import { StyleSheet, Text, TextInput, Image, View, TouchableHighlight, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={ require('../../assets/image/logo_janreco.jpg')} style={styles.topLogo}/>
        <View style={styles.inputBox}>
          <Icon name="md-person" style={styles.icon} />
          <TextInput style={styles.input} placeholder="User Name" placeholderTextColor='#f5e1da' autoCorrect={false}　autoCapitalize="none"/>
        </View>
        <View style={styles.inputBox}>
          <Icon name="ios-lock" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor='#f5e1da' autoCorrect={false}　autoCapitalize="none" secureTextEntry />
        </View>
        <Button title='Sign In' style={styles.button} />
        <Text style={styles.forotPw}>Forgot Password?</Text>
        <Text style={styles.newAccount}>New Account</Text>
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
  topLogo: {
    width: 400,
    height: 400,
    marginTop: -100,
  },
  icon: {
    fontSize: 30,
    color: '#f5e1da',
    marginRight: 10,
  },
  inputBox: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#f5e1da',
    marginBottom: 10,
    height: 32,
  },
  input: {
    backgroundColor:'#40A698',
    width: '60%',
    height: 30,
    marginBottom: 16,
    marginLeft: 10,
    fontSize: 20,
    padding: 1,
  },
  button: {
    width: '70%',
    height: 40,
    fontSize: 20,
    color: '#f5e1da',
    textAlign: 'center',
    backgroundColor: '#167d6f',
    marginBottom: 10,
    padding: 5,
  },
  forotPw: {
    width: '70%',
    height: 40,
    fontSize: 15,
    color: '#f5e1da',
    backgroundColor: '#40A698',
    textAlign: 'center',
    marginBottom: 50,
  },
  newAccount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
    height: 40,
    fontSize: 20,
    color: '#f5e1da',
    backgroundColor: '#40A698',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#f5e1da',
    padding: 5,
  },
});
export default LoginScreen;

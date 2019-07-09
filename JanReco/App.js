import React from 'react';
import { StyleSheet, Text, TextInput, Image, View, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={ require('./image/logo_janreco.jpg')} style={styles.topLogo}/>
      <TextInput style={styles.input} placeholder="Username"/>
      <TextInput style={styles.input} placeholder="Password"/>
      <Text style={styles.button}>Sign In</Text>
    </View>
  );
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
    marginTop: -250,
  },
  input: {
    backgroundColor:'#fff',
    width: '60%',
    height: 30,
    marginBottom: 16,
  },
});

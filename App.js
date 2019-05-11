import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  componentDidMount() {
    console.log('before')
    debugger;
    console.log('after')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Opening up App.js to start working on your app! Chee</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff'
  }
});

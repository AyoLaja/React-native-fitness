import React from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Slider
} from 'react-native';
import AddEntry from './components/AddEntry';

export default class App extends React.Component {
  state = {
    value: 0
  }

  handlePress = () => {
    alert('Hello')
  }

  render() {
    return (
      <View style={styles.container}>
        <AddEntry />
        {/* <Slider
          minimumValue={-10}
          maximumValue={10}
          step={1}
          value={this.state.value}
          onValueChange={(value) => this.setState(() => ({ value }))}
        />
        <Text>{this.state.value}</Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  btn: {
    backgroundColor: '#51c715',
    borderRadius: 25,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18
  }
})
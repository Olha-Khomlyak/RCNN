import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ''
    }
  }

  componentDidMount() {

  }

  fetchsome = () => {
    fetch('http://35.190.129.14:5000', { method: 'GET' })
      .then(response => response.json())
      .then((responseJson) => {
        console.log('didMount:>', responseJson)
        this.setState({
          dataSource: responseJson
        })
      })}

  render() {
    return (
      <SafeAreaView>
        <ScrollView>

          <View>
            <View style={styles.container}>
              <Text style={styles.text}> Recurrent Convolutional Neural Network for Object Recognition</Text>
            </View>
            <Button onPress={this.fetchsome} title='Click to train RCNN' color="red"  />
            <View style={styles.separator}></View>
            <Text>Training is done with following arguments: </Text>
            <Text>[-n 2]</Text>
            <Text>[-b 8]</Text>
            <Text>[-e 1]</Text>
            <View style={styles.separator}></View>
            <Text>{this.state.dataSource}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize:23,
    textAlign:'center',
    color:'#010131'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
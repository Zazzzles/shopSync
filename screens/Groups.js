import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//  Config
import Layout from '../config/layout'
import Colors from '../config/colors'


export default class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Groups </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        ...Layout.fullscreen
    }
})


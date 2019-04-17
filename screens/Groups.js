import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//  Config
import Layout from '../config/layout'
import Colors from '../config/colors'

//  Components
import Button from '../components/Button'
import GroupItem from '../components/GroupItem'

const GROUPS_STUB = [
  { 
    name: "Home stuff", 
    outstanding: 3,
  },
  { 
    name: "Personal shopping",
    outstanding: 0 
  },
  { 
    name: "College",
    outstanding: 2
  }
]

export default class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderGroups = () => {
    return GROUPS_STUB.map((item, index) => {
      return(
        <GroupItem
          key={index}
          label={item.name}
          badgeCount={item.outstanding}
          fullfilled={item.outstanding === 0}
        />
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}> Groups </Text>
        <Button
          label={"Add"}
          style={styles.addButton}
          icon={'add'}
        />
        {this.renderGroups()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        ...Layout.fullscreen,
        ...Layout.fullscreenPadding,
        backgroundColor: Colors.bg,
        paddingTop: 15
    },
    headingText:{
        color: 'black', 
        fontSize: 26,
        fontFamily: 'sans-serif',
        marginBottom: 15
    },
    addButton:{
      backgroundColor: Colors.primary, 
      width: '100%',
      marginBottom: 15,
    }
})


import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//  Config
import Layout from '../config/layout'
import Colors from '../config/colors'

//  Components
import Icon from '../components/icons/icons'

export default function badge ({ count, success = false }) {
    return (
      <View style={[styles.container, success && styles.containerWithSuccess]}>
        {
            success ? 
            <Icon name={'check'} color={'white'} size={11}/>
            :
            <Text style={styles.count}>{count}</Text>
        }
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: Colors.accent,
        ...Layout.center
    },
    containerWithSuccess:{
        backgroundColor: Colors.green
    },
    count:{
        color: 'white',
        fontSize: 12
    }
})
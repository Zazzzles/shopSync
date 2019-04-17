import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//  Config
import Layout from '../config/layout'
import Colors from '../config/colors'

//  Components
import Icon from '../components/icons/icons'
import Badge from '../components/Badge'

export default function GroupItem ({ label, badgeCount, fullfilled = false}) {
    return (
      <View style={styles.container}>
            <Text style={styles.labelText}>
                {label}
            </Text>
            <View style={styles.rightContainer}>
                <Badge
                    count={badgeCount}
                    success={fullfilled}
                />
                <Icon
                    name={"keyboard-arrow-right"}
                    color={Colors.bgOffset}
                />
            </View>
           
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 13,
        ...Layout.shadow,
        paddingHorizontal: 15,
    },
    labelText:{
        color: 'black',
        fontSize: 15,
    },
    rightContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})
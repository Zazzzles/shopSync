import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//  Config
import Layout from '../config/layout'
import Colors from '../config/colors'

//  Components
import Icon from '../components/icons/icons'
import Badge from '../components/Badge'

export default function ProductItem ({ label, fullfilled = false, onPress}) {

    

    return (
      <TouchableOpacity 
        style={styles.container} 
        onPress={onPress} 
        >
            <Text style={[styles.labelText, fullfilled && styles.strikeThrough]}>
                {label}
            </Text>
            <View style={styles.rightContainer}>
                {
                    fullfilled && 
                    <Badge
                    count={0}
                    success={fullfilled}
                     />
                }
                
            </View>
           
      </TouchableOpacity>
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
    },
    strikeThrough:{
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    }
})
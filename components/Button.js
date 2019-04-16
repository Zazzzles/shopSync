import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'

//  Config
import Layout from '../config/layout'
import Colors from '../config/colors'

export default function Button({ label, onPress, loading }){
    return(
        loading ? 
        <View style={styles.container}>
            <ActivityIndicator size={'small'} color={'white'}/>
        </View> : 
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.labelText}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 40,
        width: '80%',
        backgroundColor: Colors.accent,
        borderRadius: 5,
        ...Layout.center
    },
    labelText:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    }
})
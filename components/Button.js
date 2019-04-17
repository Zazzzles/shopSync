import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'

//  Components
import Icon from '../components/icons/icons'
//  Config
import Layout from '../config/layout'
import Colors from '../config/colors'

export default function Button({ label, onPress, loading = false, style, icon = "" }){
    return(
        loading ? 
        <View style={styles.container}>
            <ActivityIndicator size={'small'} color={'white'}/>
        </View> : 
        <TouchableOpacity style={[styles.container, {...style}, icon !== "" && styles.containerWithIcon]} onPress={onPress}>
            <Text style={styles.labelText}>
                {label}
            </Text>
            {
                icon !== "" &&
                <Icon name={icon} color={'white'}/>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 40,
        width: '80%',
        backgroundColor: Colors.accent,
        borderRadius: 5,
        ...Layout.center,
        ...Layout.shadow
    },
    containerWithIcon:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    labelText:{
        color: 'white',
        fontSize: 15,
        //fontWeight: 'bold',
    }
})
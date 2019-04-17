import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

//  Config
import Layout from '../config/layout'
import Colors from '../config/colors'

//  Components
import Icon from '../components/icons/icons'

export default function FAB ({ onPress, icon }) {
    return(
        <TouchableOpacity style={styles.container} onPress={() => onPress()}>
            <Icon name={icon} size={27} color={'white'}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 50,
        width: 50,
        borderRadius: 25,
        ...Layout.center,
        ...Layout.shadow,
        position: 'absolute',
        bottom: 60,
        right: 40,
        backgroundColor: Colors.accent
    }
})
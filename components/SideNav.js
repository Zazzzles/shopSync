import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

//  Assets
import SidenavBg from '../assets/sidenav-bg.png'

//  Config
import Layout from '../config/layout'
import Colors from '../config/colors'

//  Components
import Icon from '../components/icons/icons'

export default function SideNav(){
    return(
        <ImageBackground 
        source={SidenavBg}
        style={styles.container}
        >
          <TouchableOpacity style={styles.navItemContainer}>
            <Icon name={'center-focus-strong'} color={'white'}/>
            <Text style={styles.navItemText}>Show QR</Text>
          </TouchableOpacity>
            <View style={styles.sep}></View>
          <TouchableOpacity style={styles.navItemContainer}>
            <Icon name={'link'} color={'white'}/>
            <Text style={styles.navItemText}>Copy link</Text>
          </TouchableOpacity>
          <View style={styles.sep}></View>
          <TouchableOpacity style={styles.navItemContainer}>
          <Icon name={'cancel'} color={Colors.red}/>
            <Text style={[styles.navItemText, { color: Colors.red}]}>Leave group</Text>
          </TouchableOpacity>
        </ImageBackground>
      )
}

const styles = StyleSheet.create({
    container:{
        height: Layout.fullscreen.height,
        width: 150,
        backgroundColor: Colors.primary,
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 60,
    },
    navItemContainer:{
        width: '90%',
        ...Layout.center
    },
    navItemText:{
        fontSize: 15,
        color: 'white'
    },
    sep:{
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'white',
        width: '80%',
        marginVertical: 20
    }
})
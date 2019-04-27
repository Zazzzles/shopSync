import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

//  Config
import Colors from '../config/colors'
import Layout from '../config/layout'

//  Components
import Icon from './icons/icons'

export default class Notification extends Component {
    constructor(props){
        super(props)
        this.state={
            top: new Animated.Value(-70),
            type: 'success',
            message: ''
        }
    }

    show = (type, message) => {
        this.setState({
            type,
            message
        }, () => this.doAnimation())
    }

    doAnimation = () => {
        Animated.spring(this.state.top, {
            toValue: 20,
            duration: 300
        }).start(() => {
            setTimeout(() => {
                Animated.timing(this.state.top, {
                    toValue: -70,
                    duration: 300
                }).start()
            }, 700)
        })
    }

    render(){
        const { top, type, message } = this.state
        const animatedStyles = {top}
        const typeStyles = {
            success: styles.success,
            error: styles.error
        }
        const typeIcons = {
            success: 'done',
            error: 'priority-high'
        }
        return(
            <Animated.View style={[styles.container, animatedStyles, typeStyles[type]]}>
                <Icon name={typeIcons[type]} color='white' size={23} />
                <Text style={styles.message}>{message}</Text>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        width: Layout.fullscreen.width-40,
        height: 40,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    success:{
        backgroundColor: Colors.green,
    },
    error:{
        backgroundColor: Colors.red,
    },
    message:{
        color: 'white',
        fontSize: 14,
        marginLeft: 15,
        width: Layout.fullscreen.width-100,
    }
})
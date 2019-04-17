import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//  Config
import Layout from '../config/layout'
import Colors from '../config/colors'

//  Components
import Icon from '../components/icons/icons'
import Badge from '../components/Badge'

export default function GroupItem ({ label, badgeCount, fullfilled = false, onPress, onLeaveGroup}) {

    return (
      <TouchableOpacity 
        style={styles.container} 
        onPress={onPress} 
        >
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
    }
})
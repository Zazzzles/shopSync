import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function TextField ({ placeholder, value, onChange }) {
    return (
      <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
            />
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: 40,
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingLeft: 10,
        justifyContent: 'center',
    }
})
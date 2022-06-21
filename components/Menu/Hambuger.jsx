import React from 'react'
import { View, StyleSheet } from 'react-native';

const Hambuger = () => {
  return (
    <View style={styles.container} >
        <View style={styles.line} ></View>
        <View style={styles.line2} ></View>
    </View>
  )
}

export default Hambuger

const styles = StyleSheet.create({
    container: {

    },
    line: {
        width: 30,
        height: 3,
        backgroundColor: '#000',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 3,
    },
    line2: {
        width: 20,
        height: 3,
        backgroundColor: '#000',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 3,
    }
})
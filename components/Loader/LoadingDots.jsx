import React from 'react'
import { View, StyleSheet } from 'react-native'

const LoadingDots = () => {
  return (
    <View style={styles.container} >
        <View style={styles.dot} ></View>
        <View style={styles.dot} ></View>
        <View style={styles.dot} ></View>
    </View>
  )
}

export default LoadingDots

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dot:{
      width: 10,
      height: 10,
      backgroundColor: '#fff',
    }
})
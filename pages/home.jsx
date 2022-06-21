import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../components/Menu/Menu'
import Album from '../components/Album/Album'

const home = () => {
  return (
    <View style={styles.container} >
        <Menu />
        <Album />
    </View>
  )
}

export default home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 20,
        paddingHorizontal: 20,
    }
})
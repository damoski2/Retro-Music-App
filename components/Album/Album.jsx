import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import AlbumCard from './Albumcard';

const Album = () => {
  return (
    <View style={styles.container} >
        <Text style={styles.text} >Top Album</Text>
        <AlbumCard />
    </View>
  )
}

export default Album

const styles = StyleSheet.create({
    container: {
       marginTop: 30
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
import React from 'react'
import { View , Text, StyleSheet } from 'react-native'
import Hambuger from './Hambuger'
import Svg from '../SVG/Svg';


const Menu = () => {
  return (
    <View style={styles.container} >
        <Hambuger />
        <Text style={styles.text} >
            Music Player
        </Text>
        <View>
            <Svg width="35" height="35" path="https://res.cloudinary.com/oyindacodes/image/upload/v1655846669/Search_jwcdp3.svg" />
        </View>
    </View>
  )
}

export default Menu


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    text: {
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    }
})
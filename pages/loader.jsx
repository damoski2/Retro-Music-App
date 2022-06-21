import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import LoadingDots from '../components/Loader/LoadingDots'

const loader = () => {
  return (
    <View className={styles.container} >
        <View>
            <Image 
                source={require('../assets/images/Logo.svg')}
            />
            <LoadingDots />
        </View>
    </View>
  )
}

export default loader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
})
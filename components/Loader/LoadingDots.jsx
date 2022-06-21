import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'

const LoadingDots = () => {

  const [visible, setVisible] = useState(false);

/*   useEffect(()=>{
    setInterval(()=>{
      setVisible(!visible)
    },6000)
  },[])
 */
  return (
    <View style={styles.container} >
      {/*   <View style={styles.dot} ></View>
        <View style={styles.dot} ></View>
        <View style={styles.dot} ></View> */}
        
        <AnimatedLoader 
          visible={true}

          source={require('../../animationData/loader_balls.json')}
          speed={.6}
          animationStyle={styles.lottie}
        />
    </View>
  )
}

export default LoadingDots

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dot:{
      width: 15,
      height: 15,
      borderRadius: 999,
      backgroundColor: '#fff',
    },
    lottie:{
      width: 100,
      height: 100,
      marginTop: 30
    }
})
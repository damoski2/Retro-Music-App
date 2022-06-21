import React from 'react'
import SvgUri from "react-native-svg-uri";


const Svg = ({ width, height, path }) => {
  return (
    <SvgUri
            width={width}
            height={height}
            source={{
                uri: path
            }}
          />
  )
}

export default Svg
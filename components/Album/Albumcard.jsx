import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const Albumcard = () => {
  return (
    <View style={styles.overall}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          resizeMode="cover"
          imageStyle={{ borderRadius: 27 }}
          source={require("../../assets/images/headphones.jpg")}
        />
      </View>

      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          resizeMode="cover"
          imageStyle={{ borderRadius: 27 }}
          source={require("../../assets/images/headphones.jpg")}
        />
      </View>
    </View>
  );
};

export default Albumcard;

const styles = StyleSheet.create({
  overall: {
    marginTop: 20,
    flexDirection: "row",
  },
  container: {
    width: 240,
    height: 281,
    marginHorizontal: 20,
    
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

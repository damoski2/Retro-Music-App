import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import LoadingDots from "../components/Loader/LoadingDots";
import SvgUri from "react-native-svg-uri";
import { LinearGradient } from "expo-linear-gradient";

const loader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerView} >
        <View style={styles.logoCnt}>
          <SvgUri
            width="150"
            height="150"
            source={require("../assets/images/Logo.svg")}
          />
        </View>
        <LoadingDots />
      </View>
    </View>
  );
};

export default loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      "linear-gradient(180deg, #FC2E32 100%, rgba(235, 19, 17) 99.98%, rgba(249, 21, 21, 0.489583) 99.99%, rgba(218, 182, 50, 0) 100%)",
    padding: 16,
  },

  innerView: {
    alignContent: "center",
    alignItems: "center",
    height: '',
  },

  logoCnt: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 999,
    marginBottom: 16,
  },
});

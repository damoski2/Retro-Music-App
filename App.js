import { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from './Main';
import Loader from "./pages/loader";
import Home from "./pages/home";
import { GlobalProvider, GlobalContext } from "./context/GlobalContext";

export default function App() {

  return (
    <GlobalProvider>
     <Main />
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

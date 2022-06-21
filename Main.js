import { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Loader from "./pages/loader";
import Home from "./pages/home";
import { GlobalContext } from "./context/GlobalContext";

export default function Main() {
  const { loading, page } = useContext(GlobalContext);

  const [currentComponent, setCurrentComponent] = useState(<></>);

  //Function To Render Component through state determination

  useEffect(() => {
    switch (page) {
      case "loading":
        return setCurrentComponent(<Loader />);

      case "home":
        return setCurrentComponent(<Home />);

      default:
        return setCurrentComponent(<Loader />);
    }
  }, [page]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {currentComponent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

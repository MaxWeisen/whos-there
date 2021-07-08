import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import FavList from "./components/Favorites";
import Maps from "./components/Map";


export default function App() {
  return (
    <View style={styles.container}>
      <Maps />
      <FavList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D0169",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

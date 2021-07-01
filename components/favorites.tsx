import * as React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
const axios = require('axios');


export default function FavList() {

  // This is where we will make a get request to the backend to check for user favorites and cache them


  return (
    <View style={styles.container}>
      <Text>This is a list of FAV</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "4%",
    backgroundColor: "#FFF9E2",
  },
});

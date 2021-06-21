import * as React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function FavList() {
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

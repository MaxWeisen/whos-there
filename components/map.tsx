import * as React from "react";
import MapView from "react-native-maps";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const screenHeight =
  Dimensions.get("window").height - Dimensions.get("window").height / 2;
const screenWidth =
  Dimensions.get("window").width - Dimensions.get("window").width / 16;

export default function Maps() {



  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        showsUserLocation={true}
        followsUserLocation={true}
        maxZoomLevel={10}
        ></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "8%",
    justifyContent: "flex-start",
  },
  map: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    borderRadius: 16,
  },
});

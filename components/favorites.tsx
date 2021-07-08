import * as React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Card from "./Card";
const axios = require('axios');


export default function FavList() {

  // This is where we will make a get request to the backend to check for user favorites and cache them
  const data = [];

  for (let i = 0; i < 20; i++) {
    data.push({
      location: `Location ${i}`,
      description: `Description ${i}`
    })
  }

  return (
    <ScrollView style={styles.container}>
      {data.map(el => {
        return <Card key={el.description} location={el.location} description={el.description}/>
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "4%",
    backgroundColor: "#FFF9E2",
    minWidth: "95%",
    borderRadius: 10,
  },
});

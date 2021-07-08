import * as React from 'react';
import { useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from "react-native";

export default function Card({ location, description }) {
  const [ show, setShow ] = useState(true);

  function removeFav() {
    setShow(false);
  }

  return (
    show ?
    <View key={description} style={styles.cards}>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.description}>{description}</Text>
      <Pressable onPress={removeFav}><Text>Remove</Text></Pressable>
    </View> : null
  )
}

const styles = StyleSheet.create({
  cards: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  location: {
    padding: 5,
  },
  description: {
    padding: 5,
  }
})

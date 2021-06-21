import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from './components/map';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView />
      <Text style={{color: '#888', fontSize: 18}}>
        Add your favorite restaurants, bars, venues, etc...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

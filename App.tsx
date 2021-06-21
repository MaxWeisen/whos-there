import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Maps from './components/map';

export default function App() {
  return (
    <View style={styles.container}>
      <Maps />
      <Text style={{color: '#888', fontSize: 18}}>
        Add your favorite restaurants, bars, venues, etc...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D0169',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

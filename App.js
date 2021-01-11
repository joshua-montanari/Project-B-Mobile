import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header/Header'
import { NavigationContainer } from '@react-navigation/native';
import Appbar from './Components/Appbar/Appbar'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>BNW Mobile</Text>
      <NavigationContainer>
        <Appbar />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30343b',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

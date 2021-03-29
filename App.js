'use strict';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//const Stack = createStackNavigator();

export default function App() {
  return React.createElement(Text, {style: styles.description}, "S & Z");
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});


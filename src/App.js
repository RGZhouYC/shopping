'use strict';
// Microservices
// Front end <-> Back-end <-> Amazon, Bestbuy, Walmart, etc.
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import './index.css';
import Header from './Header'
import Footer from './Footer'
import SearchBar from './SearchBar'
import Button from './Button'
import SearchResult from './SearchResult'

export default function App() {
  const [input, setInput] = useState('');

  return (
    <div className='container'>
      <Header/>
      <SearchBar input={input} onChange={setInput} />
      {/* <SearchResult/> */}
      <Footer/>
    </div>
  )
}

// const styles = StyleSheet.create({
//   description: {
//     fontSize: 18,
//     textAlign: 'center',
//     color: '#656565',
//     marginTop: 65,
//   },
// });


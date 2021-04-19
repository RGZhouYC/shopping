'use strict';
// Microservices
// Front end <-> Back-end <-> Amazon, Bestbuy, Walmart, etc.
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
      <Header />
      <Router>
        <Switch>
          <Route path="/SearchBar" component={SearchBar}/>
          <Route path="/SearchResult" component={SearchResult}/>
          {/* <SearchBar input={input} onChange={setInput} /> */}
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}



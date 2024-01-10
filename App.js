import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Hellopage from './src/screen/Hellopage'
import { NavigationContainer } from '@react-navigation/native'
import Homepage from './src/screen/Homepage';
const App = () => {
  return (
    <NavigationContainer>
      {/* <Hellopage/> */}
      <Homepage/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
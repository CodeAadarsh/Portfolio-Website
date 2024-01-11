import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Hellopage from '../screen/Hellopage'
import Homepage from '../screen/Homepage'
const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Hellopage" component={Hellopage} options={{headerShown:false}} />
      <Stack.Screen name="Homepage" component={Homepage} options={{headerShown:false}} />
    </Stack.Navigator>


  )
}

export default HomeNavigation

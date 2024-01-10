import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DarkMode, LightMode } from '../constants/colors'

const Boxcomponent = ({width,height,lightMode}) => {
  return (
    <View style={{borderWidth:0,backgroundColor:DarkMode.boxbg,width:width,height:height,borderRadius:50,paddingHorizontal:50,shadowColor:lightMode?LightMode.green:DarkMode.green,
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    margin: 10,}}>

    </View>
  )
}

export default Boxcomponent

const styles = StyleSheet.create({})
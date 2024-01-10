import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const {width, height} = Dimensions.get('window')
const sWidth = Dimensions.get('screen').width
const sHeight = Dimensions.get('screen').height




export const Sizes = {
    wWidth: width,
    wHeight: height,
    sWidth: sWidth,
    sHeight: sHeight,
}
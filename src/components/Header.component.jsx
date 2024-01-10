import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DarkMode, LightMode } from '../constants/colors'

const HeaderComponent = ({HandleLightmode}) => {
    const [lightMode,setLightMode] = useState(false)
    
    useEffect(()=>{
        HandleLightmode(lightMode)
    },[lightMode])

  return (
    
    <View style={{ borderWidth: 0, height: 73, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 32 }}>
                
    <Text style={{ color: lightMode ? null : DarkMode.whiteColor, fontWeight: '400', fontSize: 24, fontFamily: 'Salsa',
    textShadowColor: DarkMode.green,textShadowRadius: 15,textShadowOffset: {width: 2, height:1 },
}}> Aadarsh Verma</Text>

    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '20%' }}>
        <Pressable onPress={()=>setLightMode(!lightMode)} style={{shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,backgroundColor:lightMode?DarkMode.yellow :DarkMode.gray,borderWidth:0,height:31,width:56,borderRadius:17,justifyContent:'center',alignItems:lightMode&&'flex-end'}}>
            <View 
            onPress={()=>setLightMode(!lightMode)}
            style={{width:31,height:31,backgroundColor:DarkMode.whiteColor,borderRadius:31/2,justifyContent:'center',alignItems:'center',borderWidth:0.1,borderColor:'#d8d8d8'}}>
                <Image source={lightMode?require('../assets/images/lightBulb.png'):require('../assets/images/lightBulbOff.png')} style={{width:21,height:21}}/>
            </View>

        </Pressable>
        <Text style={{ color: lightMode ? null : DarkMode.whiteColor, fontWeight: '400', fontSize: 18, fontFamily: 'Salsa' }}>Work</Text>
        <Text style={{ color: lightMode ? null : DarkMode.whiteColor, fontWeight: '400', fontSize: 18, fontFamily: 'Salsa' }}>Contact</Text>
        <Text style={{ color: lightMode ? null : DarkMode.whiteColor, fontWeight: '400', fontSize: 18, fontFamily: 'Salsa' }}>Resume</Text>
    </View>

</View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({})
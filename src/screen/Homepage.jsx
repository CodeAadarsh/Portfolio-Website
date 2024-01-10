import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Sizes } from "../constants/Size";
import { DarkMode, LightMode } from "../constants/colors";
import { useFonts } from 'expo-font';
import HeaderComponent from "../components/Header.component";
import { LinearGradient } from 'expo-linear-gradient';
import Boxcomponent from "../components/Box.component";
const Homepage = () => {

    let positionsData = [
        "Developer", "Tech Enthusiast","React native Developer","Mobile Developer", "Freelancer"
    ]
    const [positions, setPosition] = useState(positionsData[1]);
    const [lightMode,setLightMode] = useState(false)

    const changeLightMode = (lightmode)=>{
        setLightMode(lightmode)
    }
    const changePositions = () => {
        setInterval(() => {
            setPosition(positionsData[Math.floor(Math.random() * positionsData.length)])
        }, 1000 );
    }

    useEffect(() => {
        changePositions();
    }, [])

    const [fontsLoaded] = useFonts({
        'Salsa': require('../assets/fonts/Salsa-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>
    }
    return (
        <LinearGradient
        end={{x:0.1,y:2}}

        colors={lightMode?['#7ba7fe', LightMode.bgcolor]:['#183250', DarkMode.bgcolor]} style={[styles.container,{
        backgroundColor:lightMode?LightMode.bgcolor: DarkMode.bgcolor,

        }]}>
            <HeaderComponent HandleLightmode={changeLightMode}/>
            <View style={{marginTop:120,borderWidth:0,marginHorizontal:120,paddingBottom:200}}>
                <Text style={{fontSize:70,fontWeight:'400',color:lightMode?DarkMode.black:LightMode.whiteColor,fontFamily:'Salsa'}}>
                Hi, I am a <Text style={{fontSize:70,fontWeight:'400',color:lightMode?LightMode.green:DarkMode.green,fontFamily:'Salsa'}}>{positions}</Text> 
                {`\n`}From India 
                </Text>

            </View>
            
            <View style={{borderWidth:0,backgroundColor:DarkMode.boxbg,width:'95%',height:407,alignSelf:'center',borderRadius:50,justifyContent:'center',paddingHorizontal:50,shadowColor:lightMode?LightMode.green:DarkMode.green,
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    margin: 10,}}>

                <Text style={{color:DarkMode.whiteColor,fontFamily:'Salsa',fontSize:29,fontWeight:'400',}}>
                    
            👋 Hello World!{'\n'}
            I'm Aadarsh, a passionate React Native developer with a love for crafting innovative and seamless mobile applications. My journey in the tech realm revolves around the elegant dance of code, and JavaScript is my language of choice.
            {'\n'}
            {'\n'}
            🚀 As a technology enthusiast, I thrive on the ever-evolving landscape of software development. I'm not just building apps; I'm shaping experiences and pushing the boundaries of what's possible in the digital realm.
                </Text>

            </View>
            <View style={{marginHorizontal:38,flexDirection:'row'}}>

            <View style={{borderWidth:0,backgroundColor:DarkMode.boxbg,width:407,height:407,borderRadius:50,paddingHorizontal:50,shadowColor:lightMode?LightMode.green:DarkMode.green,
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    margin: 10,paddingVertical:31}}>
         <Text style={{color:DarkMode.whiteColor,fontFamily:'Salsa',fontSize:29,fontWeight:'400',}}>
            Follow me
         </Text>
         <View style={{flexDirection:'row',borderWidth:0,marginVertical:20,justifyContent:'space-between',marginHorizontal:10}}>
         <Pressable>

            <Image source={require('../assets/images/linkedin.png')} style={{height:128,width:128}}/>
         </Pressable>
         <Pressable>

            
            <Image source={require('../assets/images/x.png')} style={{height:128,width:128,backgroundColor:DarkMode.whiteColor,borderRadius:20,}}/>
         </Pressable>

         </View>
         <View style={{flexDirection:'row',borderWidth:0,marginVertical:20,justifyContent:'space-between',marginHorizontal:10}}>
            <Pressable>

            <Image source={require('../assets/images/hashnode.png')} style={{height:128,width:128,backgroundColor:DarkMode.whiteColor,borderRadius:20,resizeMode:'center'}}/>
            </Pressable>
            <Pressable>

            <Image source={require('../assets/images/instagram.png')} style={{height:128,width:128,backgroundColor:DarkMode.whiteColor,borderRadius:20,resizeMode:'center',}}/>
            </Pressable>

         </View>


    </View>
    <View style={{borderWidth:0,backgroundColor:DarkMode.boxbg,width:'73%',height:407,borderRadius:50,paddingHorizontal:50,shadowColor:lightMode?LightMode.green:DarkMode.green,
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    margin: 10,paddingVertical:31}}>

    </View>

    </View>
        </LinearGradient>
    )
}

export default Homepage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DarkMode.bgcolor,
        paddingBottom:50
    },

})
import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Sizes } from "../constants/Size";
import { DarkMode, LightMode } from "../constants/colors";
import { useFonts } from 'expo-font';
import HeaderComponent from "../components/Header.component";
import { LinearGradient } from 'expo-linear-gradient';
import Boxcomponent from "../components/Box.component";
import { Clipboard } from 'expo-clipboard';
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
            <View style={{marginTop:100,borderWidth:0,marginHorizontal:120,justifyContent:'space-between'}}>
                <Text style={{fontSize:70,fontWeight:'400',color:lightMode?DarkMode.black:LightMode.whiteColor,fontFamily:'Salsa'}}>
                Hi, I am a <Text style={{fontSize:70,fontWeight:'400',color:lightMode?LightMode.green:DarkMode.green,fontFamily:'Salsa'}}>{positions}</Text> 
                {`\n`}From India 
                </Text>
                <TouchableOpacity onPress={()=>Linking.openURL('https://drive.google.com/file/d/1XKN9quLdctkF4QDRnjVSKQK_N3rfwQg6/view?usp=sharing')} style={{borderWidth:0,backgroundColor:DarkMode.boxbg,width:'15%',marginTop:20,height:70,borderRadius:50,justifyContent:'center',paddingHorizontal:50,shadowColor:lightMode?LightMode.green:DarkMode.green,alignItems:'center',
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    margin: 10,}}>
        <Text style={{color:DarkMode.whiteColor,fontFamily:'Salsa',fontSize:29,fontWeight:'400',}}>
            Resume
         </Text>

    </TouchableOpacity>

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

            <View style={{borderWidth:0,backgroundColor:DarkMode.boxbg,width:'25%',height:407,borderRadius:50,paddingHorizontal:50,shadowColor:lightMode?LightMode.green:DarkMode.green,
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    margin: 10,paddingVertical:31}}>
         <Text style={{color:DarkMode.whiteColor,fontFamily:'Salsa',fontSize:29,fontWeight:'400',}}>
            Follow me
         </Text>
         <View style={{flexDirection:'row',borderWidth:0,marginVertical:20,justifyContent:'space-between',marginHorizontal:10}}>
         <Pressable onPress={()=>Linking.openURL('https://www.linkedin.com/in/lvadarsh/')}>

            <Image source={require('../assets/images/linkedin.png')} style={{height:128,width:128}}/>
         </Pressable>
            <Pressable onPress={()=>Linking.openURL('https://twitter.com/Aadarshcodes')}>
            <Image source={require('../assets/images/x.png')} style={{height:128,width:128,backgroundColor:DarkMode.whiteColor,borderRadius:20,}}/>
         </Pressable>

         </View>
         <View style={{flexDirection:'row',borderWidth:0,marginVertical:20,justifyContent:'space-between',marginHorizontal:10}}>

            <Pressable onPress={()=>Linking.openURL('https://aadarshcodes.hashnode.dev/')}>
            <Image source={require('../assets/images/hashnode.png')} style={{height:128,width:128,backgroundColor:DarkMode.whiteColor,borderRadius:20,resizeMode:'center'}}/>
            </Pressable>

            <Pressable onPress={()=>Linking.openURL('https://www.instagram.com/lv_adarsh/')}>
            <Image source={require('../assets/images/instagram.png')} style={{height:128,width:128,backgroundColor:DarkMode.whiteColor,borderRadius:20,resizeMode:'center',}}/>
            </Pressable>

         </View>


    </View>
    {/* Hire me block */}
    <View style={{borderWidth:0,backgroundColor:DarkMode.boxbg,width:'73%',height:407,borderRadius:50,paddingHorizontal:50,shadowColor:lightMode?LightMode.green:DarkMode.green,
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    margin: 10,paddingVertical:31,flexDirection:'row'}}>
        <View style={{flexDirection:'column',alignItems:'center',borderWidth:0,width:'100%'}}>
        <View style={{flexDirection:'row',alignItems:'center',borderWidth:0,width:'100%',}}>

        <Image source={require('../assets/images/profilePic.png')} style={{width:109,height:109}}/>
        <Text style={{color:DarkMode.whiteColor,fontFamily:'Salsa',fontSize:80,left:25,fontWeight:'400',}}>
            Let's work
         </Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',borderWidth:0,width:'100%',justifyContent:'flex-start'}}>
        <Text style={{color:DarkMode.whiteColor,fontFamily:'Salsa',fontSize:80,left:25,fontWeight:'400',}}>
            together
         </Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',borderWidth:0,width:'100%',justifyContent:'flex-end'}}>
        <Pressable onPress={()=>Linking.openURL('mailto:Aadarsh24lv@gmail.com?subject=Urgent attention required&body=Hello sir, I want to hire you!').catch(error => {
    console.log(error);
})} style={{right:50,borderWidth:0.2,backgroundColor:DarkMode.boxbg,width:300,height:85,borderRadius:50,paddingHorizontal:50,shadowColor:lightMode?LightMode.green:DarkMode.green,
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
        justifyContent:'center',
        alignItems:'center'
}}>

        <Text style={{color:DarkMode.whiteColor,fontFamily:'Salsa',fontSize:20,fontWeight:'400',}}>
        Aadarsh24lv@gmail.com
         </Text>
    </Pressable>
        <Pressable onPress={()=>Linking.openURL('tel:+919520457941')} style={{right:10,borderWidth:0.2,backgroundColor:DarkMode.boxbg,width:300,height:85,borderRadius:50,paddingHorizontal:50,shadowColor:lightMode?LightMode.green:DarkMode.green,
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
        justifyContent:'center',
        alignItems:'center'
}}>

        <Text style={{color:DarkMode.whiteColor,fontFamily:'Salsa',fontSize:24,fontWeight:'400',}}>
        +91-9520457941
         </Text>
    </Pressable>
        
        </View>
        </View>

    </View>
    </View>
    <View style={{borderWidth:0,backgroundColor:DarkMode.boxbg,width:'95%',height:895,borderRadius:50,paddingHorizontal:50,paddingVertical:50,shadowColor:lightMode?LightMode.green:DarkMode.green,
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginVertical:12,alignSelf:'center'}}>
        <Text style={{color:DarkMode.whiteColor,fontFamily:'Salsa',fontSize:29,fontWeight:'400',}}>
            My Projects 
         </Text>
         <LinearGradient colors={['#00ee','#0eee']} style={{borderWidth:1,marginTop:40,width:1004,height:700,borderRadius:50,alignSelf:'center'}}>

         </LinearGradient>
            <View style={{borderWidth:0,position:'relative',height:50,marginTop:10,alignItems:'center',justifyContent:'center',flexDirection:'row',justifyContent:'space-evenly',width:'30%',alignSelf:'center'}}>
                <View style={{borderWidth:1,height:9,width:116,backgroundColor:lightMode?LightMode.green:DarkMode.green}}></View>
                <View style={{borderWidth:1,height:9,width:116,backgroundColor:lightMode?LightMode.green:DarkMode.green}}></View>
                <View style={{borderWidth:1,height:9,width:116,backgroundColor:lightMode?LightMode.green:DarkMode.green}}></View>
                

            </View>


    </View>
    <View style={{borderWidth:0,backgroundColor:DarkMode.boxbg,width:'95%',height:895,borderRadius:50,paddingHorizontal:40,paddingVertical:50,shadowColor:lightMode?LightMode.green:DarkMode.green,
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginVertical:12,alignSelf:'center'}}>
        <Text style={{color:DarkMode.whiteColor,fontFamily:'Salsa',fontSize:29,fontWeight:'400',}}>
            My Tech Stack 
         </Text>
         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection:'row',marginTop:20,width:'102%',borderRadius:50,alignSelf:'center',borderWidth:0}}>
         <View style={{borderWidth:0,flexDirection:'column',borderRadius:50,alignSelf:'center'}}>
            <Boxcomponent width={228} height={228} lightMode={lightMode} borderWidth={1} imageURL={require("../assets/images/js.png")} imageHeight={128} imageWidth={128}/>

            <Boxcomponent width={228} height={228} lightMode={lightMode} borderWidth={1} imageURL={require("../assets/images/mongoDB.png")} imageHeight={128} imageWidth={128}/>

            <Boxcomponent width={228} height={228} lightMode={lightMode} borderWidth={1} imageURL={require("../assets/images/angular.png")} imageHeight={128} imageWidth={128}/>
         </View>
         <View style={{borderWidth:0,borderRadius:50,alignSelf:'center'}}>
         <Boxcomponent width={514} height={731} lightMode={lightMode} borderWidth={1} imageURL={require("../assets/images/reactNative.png")} imageHeight={449} imageWidth={449}/>

         </View>
         <View style={{borderWidth:0,borderRadius:50,alignSelf:'flex-start',flexDirection:'column'}} imageURL={require("../assets/images/nodeJS.png")} imageHeight={108} imageWidth={108}>
         <View style={{borderWidth:0,borderRadius:50,alignSelf:'flex-start',flexDirection:'row'}}>
         <Boxcomponent width={228} height={228} lightMode={lightMode} borderWidth={1} imageURL={require("../assets/images/nodeJS.png")} imageHeight={128} imageWidth={128}/>
         <Boxcomponent width={228} height={228} lightMode={lightMode} borderWidth={1} imageURL={require("../assets/images/ts.png")} imageHeight={128} imageWidth={128}/>
         </View>
         <View style={{borderWidth:0,borderRadius:50,alignSelf:'flex-start',flexDirection:'column'}} imageURL={require("../assets/images/linkedin.png")} imageHeight={228} imageWidth={228}>
         <Boxcomponent width={470} height={470} lightMode={lightMode} borderWidth={1} imageURL={require("../assets/images/express.png")} imageHeight={400} imageWidth={400}/>


         </View>
         </View>
         <View style={{borderWidth:0,flexDirection:'column',borderRadius:50,alignSelf:'center'}}>
            <Boxcomponent width={228} height={228} lightMode={lightMode} borderWidth={1} imageURL={require("../assets/images/redux.png")} imageHeight={108} imageWidth={108}/>
            <Boxcomponent width={228} height={228} lightMode={lightMode} borderWidth={1} imageURL={require("../assets/images/docker.png")} imageHeight={106} imageWidth={106}/>
            <Boxcomponent width={228} height={228} lightMode={lightMode} borderWidth={1} imageURL={require("../assets/images/firebase.png")} imageHeight={106} imageWidth={106}/>
         </View>
         <View style={{borderWidth:0,borderRadius:50,alignSelf:'center'}}>
         <Boxcomponent width={514} height={731} lightMode={lightMode} borderWidth={1} imageURL={require("../assets/images/aws.png")} imageHeight={179} imageWidth={179}/>

         </View>
         <View style={{borderWidth:0,borderRadius:50,alignSelf:'flex-start',flexDirection:'column'}}>
         <View style={{borderWidth:0,borderRadius:50,alignSelf:'flex-start',flexDirection:'row'}}>
         <Boxcomponent width={228} height={228} lightMode={lightMode} borderWidth={1} imageURL={require("../assets/images/java.png")} imageHeight={106} imageWidth={106}/>
         <Boxcomponent width={228} height={228} lightMode={lightMode} borderWidth={1} imageURL={require("../assets/images/python.png")} imageHeight={106} imageWidth={106}/>
         </View>
         <View style={{borderWidth:0,borderRadius:50,alignSelf:'flex-start',flexDirection:'column'}}>
         <Boxcomponent width={470} height={470} lightMode={lightMode} borderWidth={1} imageURL={require("../assets/images/kubernetes.png")} imageHeight={290} imageWidth={290}/>


         </View>
         </View>


         </ScrollView>


    </View>
         <View style={{borderWidth:0,backgroundColor:DarkMode.whiteColor,width:'95%',height:442,borderRadius:50,paddingHorizontal:40,paddingVertical:50,shadowColor:lightMode?LightMode.green:DarkMode.green,
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginVertical:12,alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:DarkMode.black,fontFamily:'Salsa',fontSize:29,fontWeight:'400',}}>
            Aadarsh Verma
         </Text>
         <View style={{width:'20%',height:'20%',borderWidth:0,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
            <Pressable onPress={()=>Linking.openURL('mailto:aadarsh24lv@gmail.com')}>

            <Image source={require("../assets/images/mailBlack.png")} style={{width:48,height:48}} />
            </Pressable>

            <Pressable onPress={()=>Linking.openURL('https://www.linkedin.com/in/lvadarsh/')}>
            <Image source={require("../assets/images/linkedinBlack.png")} style={{width:48,height:48}} />
            </Pressable>
            

            <Pressable onPress={()=>Linking.openURL('https://www.instagram.com/lv_adarsh/')}>
            <Image source={require("../assets/images/instaBlack.png")} style={{width:48,height:48}} />
            </Pressable>
            <Pressable onPress={()=>Linking.openURL('https://twitter.com/Aadarshcodes')}>
                
            <Image source={require("../assets/images/xBlack.png")} style={{width:48,height:48}} />
            </Pressable>


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
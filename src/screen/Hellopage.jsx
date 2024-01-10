import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Sizes } from "../constants/Size";
import { DarkMode, LightMode } from "../constants/colors";
import { useFonts } from 'expo-font';

const Hellopage = () => {
    const [greetings, setGreetings] = useState("Hello");
    const helloLang = [
        "Hello",
        "नमस्ते",
        "Bonjour",
        "你好",
        "Ciao",
        "Olá",
        "안녕하세요",
        "Hola",
        
    ]
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const changeGreetings = async() => {
            
            for(let i =0;i<helloLang.length;i++){
                await sleep(700)
                setGreetings(helloLang[i])    
            }
            console.log("Hogaya bhai 🙏🥲")
            
    }

    useEffect(() => {
        changeGreetings();
    }, [])

    const [fontsLoaded] = useFonts({
        'Andika': require('../assets/fonts/Andika-Regular.ttf'),
      });
      if(!fontsLoaded){
        return <Text>Loading...</Text>
      }
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        {greetings}
      </Text>
    </View>
  );
};

export default Hellopage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkMode.bgcolor,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText:{ color: DarkMode.whiteColor, fontSize:120,fontFamily:'Andika' }
});

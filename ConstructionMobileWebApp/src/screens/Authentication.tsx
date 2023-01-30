import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import React from 'react';
import  { useState } from "react";
import {  Image, Dimensions, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { Link, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

const top = require("../../assets/authentication.png");
const emailIcon = require("../../assets/emailIcon.png");
const passwordIcon = require("../../assets/passwordIcon.png");
const width= Dimensions.get('screen').width;
const Stack = createStackNavigator();
export default function Authentication({}) {
  const [email, setEmail] = useState("");
  return <>
  <View style={styles.global}>  
  <NavigationContainer>
    <Stack.Navigator>
    <Image source ={top} style ={styles.top} /> 
    <Text style={styles.title}>Bem vindo a PEX!</Text>
    <Text style={styles.subtitle}>Informe os seus dados para ter acessoa um mundo de economia para sua obra</Text>
        <View style={styles.emailSection}>
            <Image style={styles.icon} source={emailIcon}/>
            <TextInput placeholder='Email' value={email} onChangeText={setEmail} style={styles.emailInput}/>
        </View>
        <View style={styles.passwordSection}>
            <Image style={styles.icon} source={passwordIcon}/>
            <TextInput placeholder='Senha' secureTextEntry ={true} style={styles.passwordInput}></TextInput>
        </View>
        <Stack.Screen name="Home" component={Home} />
        <Link to="/forgotPassword" style={styles.forgotPassword}>Esqueci minha senha</Link>
        <TouchableOpacity>
            <Link to="/login" style={styles.logInLink}>Acessar.</Link>
        </TouchableOpacity>
        <View style={styles.createAccountSection}>
          <Text style={styles.naoPoussuiConta}>Não possui uma conta? </Text>
          <Link to ={"/createAccount"} style={styles.textButtonCriarConta}>Criar conta</Link>
      </View>
     </Stack.Navigator>
    </NavigationContainer>
  </View>
  </>
}

const styles = StyleSheet.create({
    global:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: { 
        width: width,
        height: 299/375 * width
  },
    title: {
        width: "100%",
        fontSize: 24,
        fontWeight:"bold",
        paddingRight:150,
        paddingTop: 24,
  },
    subtitle: {
        width:"100%",
        maxWidth: width, /* set a specific maximum width */
        fontSize:14,
        color: "#999999",
        paddingLeft: 10,
        paddingTop: 8,
        wordWrap: "break-word",
        overflowWrap: "break-word"
    },
    emailInput:{
        flex:1,
        backgroundColor: "#F8F8F9",
        paddingVertical: 10,
        marginTop:26,
        borderRadius: 10,

    },
    passwordInput:{
        flex: 1,
        borderRadius: 10,
        paddingVertical: 10,
        marginTop:26,
        backgroundColor: "#F8F8F9"
    },
    createAccountSection:{
        flexDirection:"row",
        marginBottom:150
    },
    textButtonCriarConta:{
        marginTop:24,
        color:"#F09200",
        fontWeight:"bold",
        marginBottom:0
    }, 
    naoPoussuiConta:{
        marginBottom:24,
        marginLeft:90,
        color:"#999999",
    }, 
    icon:{
      backgroundColor: "#F8F8F9",
      marginTop:30,
      width:20,
      height:20,
    }, 
    emailSection:{
        flex: 1,
        flexDirection: 'row',

    },
    passwordSection:{
        flex: 1,
        flexDirection: 'row',
        paddingVertical:0,
    }
    ,
    forgotPassword:{
        marginTop: 24,
        fontStyle: "normal",
        fontSize: 14,
        textAlign:"center",
        color:"#F09200"

    },
    logInLink:{
        color:"#FFFFFF",
        overflow: "hidden",
        textAlign:"center",
        borderRadius:10,
        backgroundColor:"#F09200",
        paddingVertical:17,
        paddingHorizontal:47,
        marginLeft:40,
        marginRight:40,
        marginBottom:70
    }, 
    loginBackground:{
        backgroundColor:"#F09200",
    }
});
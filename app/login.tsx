import React from "react";
import {Image,ScrollView,TouchableOpacity,TextInput,Button, Text, View, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../firebaseConfig";

const uri = "https://img.freepik.com/vector-premium/grupo-personas-equipo-medico-incluido-medico_1087929-7538.jpg?w=1060"
const profilepicture = "https://randomuser.me/api/portraits/men/1.jpg";
export default function Login() {
    return (
        <View style={styles.container}>
            <Image source={{ uri }} style={[styles.image,StyleSheet.absoluteFill]} />
            <View style={{width:100,height:100,backgroundColor:'purple',position:'absolute', transform:[{rotate:'25deg'}]}}></View> 
            <View style={{width:100,height:100,backgroundColor:'red',top: 100,position:'absolute'}}></View>
            <View style={{width:100,height:100,backgroundColor:'blue',bottom:100,position:'absolute',borderRadius:50}}></View>
            <ScrollView contentContainerStyle={{
                flex:1,
                width:'100%',
                height:'100%',
                alignItems: "center",
                justifyContent: "center",
            }}>
                <BlurView intensity={90}>
                    <View style={styles.login}> 
                        <Image source={{uri: profilepicture}} style={styles.profilePicture}/>
                        <View>
                            <Text style={{fontSize:17,fontWeight:400,color:'white'}}>Email</Text>
                            <TextInput style={styles.input} placeholder="gabo@outlook.com"/>
                        </View>
                        <View>
                            <Text style={{fontSize:17,fontWeight:400,color:'white'}}>Contraseña</Text>
                            <TextInput style={styles.input} placeholder="password" secureTextEntry={true}/>
                        </View>
                        <TouchableOpacity style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
                            <Text style={{fontSize:17, fontWeight:400, color:'white'}}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: '#6792F090'}]}>
                            <Text style={{fontSize:17, fontWeight:400, color:'white'}}>Crear cuenta</Text>
                        </TouchableOpacity>
                    </View>
                </BlurView>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    image: {
        width:'100%',
        height:'100%',
        resizeMode: "cover",
    },
    profilePicture:{
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
        marginVertical: 30,
    },
    login:{
        width:350,
        height:500,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
    },
    input:{
        width:250,
        height: 40,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#fffff90',
        marginBottom: 10,
    },
    button:{
        width:250,
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        borderColor: '#fff',
        borderWidth: 1,
    }
});
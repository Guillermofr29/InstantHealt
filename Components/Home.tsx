import { Stack } from "expo-router";
import React from "react";
import { View, Text, ScrollView,  } from "react-native";

 function HomeComponent() {
  return (
    <ScrollView  style={{backgroundColor:'#D9D9D9'}}>
      <View style={{ width: '100%', flex:1, top:0, padding:20, paddingBottom:25,paddingTop:50, marginHorizontal:0}}>
      <Text>Bienvenido,</Text>
      <Text>¿Que vamos a aprender hoy?</Text>
      </View>
      <View style={{backgroundColor:'#ffff', padding: 30, borderTopStartRadius:13, borderTopEndRadius:13}}>
        <Text>h</Text>
        <Text>h</Text>
        <Text>h</Text>
        <Text>h</Text>
        <Text>h</Text>
        <Text>h</Text>
        <Text>h</Text>
        <Text>h</Text>
        <Text>h</Text>
        <Text>h</Text>
        <Text>h</Text>
        <Text>h</Text>
        <Text>h</Text>
        <Text>h</Text>
        <Text>h</Text>
        <Text>h</Text>
        <Text>h</Text>
      </View>
    </ScrollView>
  );
}


export default HomeComponent;

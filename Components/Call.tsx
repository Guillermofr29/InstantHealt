import React from "react";
import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";

 function CallComponent() {
    const searchFilterFunction = (text: string) => {
      // Implement your search filter logic here
      console.log(text);
    };
  
    return (
      <ScrollView style={{backgroundColor:'red'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Directorio</Text>
      </View>
      <View style={{backgroundColor:'white'}}>
        <TextInput style={{color:'black', backgroundColor: 'white'}} placeholder='Buscar' onChangeText={text => searchFilterFunction(text)} />
      </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold'
    },
  });

export default CallComponent;

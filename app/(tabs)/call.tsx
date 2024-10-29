import { Text, View, StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";


const Call = () => {
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
      <Input style={{color:'white'}} placeholder='Buscar' onChangeText={text => searchFilterFunction(text)}></Input>
    </View>
    </ScrollView>
  );
};

export default Call;
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

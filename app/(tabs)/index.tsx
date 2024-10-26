import { Text, View, StyleSheet } from "react-native";
import React from "react";
import HomeComponent from '@/Components/Home';

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeComponent />
          </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
});

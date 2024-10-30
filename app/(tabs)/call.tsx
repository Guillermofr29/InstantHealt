
import { Text, View, StyleSheet } from "react-native";
import React from "react";
import CallComponent from '@/Components/Call';


const Call = () => {
  return (
    <View style={styles.container}>
      <CallComponent />
          </View>
  );
}
export default Call;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }});
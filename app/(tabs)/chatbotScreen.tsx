import ChatbotScreen from "@/Components/ChatbotScreen";
import { Text, View, StyleSheet } from "react-native";
import React from "react";

const Chatbot = () => {
  return (
    <View style={styles.container}>
      <ChatbotScreen/>
      </View>
  );
}
export default Chatbot;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }});
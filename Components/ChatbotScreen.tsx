// ChatbotScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView, FlatList, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Icon } from 'react-native-elements';

// Accede a tu clave de API como una variable de entorno
const apiKey = process.env.API_KEY || 'AIzaSyC1vQgXDTZERZX1gaJGMhC8_irbAqjKauQ'; // Reemplaza 'TU_CLAVE_API' con tu clave real si no usas variables de entorno
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }); // Puedes cambiar el modelo si es necesario

const ChatbotScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ id: string; text: string; sender: string }[]>([]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    setMessages([...messages, { id: `${Date.now()}-user`, text: `Tú: ${input}`, sender: 'user' }]);

    try {
      const result = await model.generateContent(input); // Usando generateContent
      const response = await result.response;
      const botMessage = response.text(); // Extrayendo el texto de la respuesta
      setMessages([...messages, { id: `${Date.now()}-user`, text: `Tú: ${input}`, sender: 'user' }, { id: `${Date.now()}-bot`, text: `Bot: ${botMessage}`, sender: 'bot' }]);
    } catch (error) {
      console.error('Error al obtener respuesta del chatbot:', error);
      setMessages([...messages, { id: `${Date.now()}-user`, text: `Tú: ${input}`, sender: 'user' }, { id: `${Date.now()}-bot`, text: `Bot: Error: No se pudo obtener una respuesta.`, sender: 'bot' }]);
    }

    setInput('');
  };

  const renderItem = ({ item }: { item: { id: string; text: string; sender: string } }) => (
    <View style={[styles.message, item.sender === "user" ? styles.userMessage : styles.botMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messagesContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu pregunta..."
          placeholderTextColor="#888"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Icon name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  messagesContainer: {
    padding: 20,
  },
  message: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: "80%",
  },
  userMessage: {
    backgroundColor: "#BE1622",
    alignSelf: "flex-end",
  },
  botMessage: {
    backgroundColor: "#e0e0e0",
    alignSelf: "flex-start",
    color: "#000",
  },
  messageText: {
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    color: "#000",
  },
  sendButton: {
    backgroundColor: "#BE1622",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatbotScreen;


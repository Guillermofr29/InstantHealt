// ChatbotScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Accede a tu clave de API como una variable de entorno
const apiKey = process.env.API_KEY || 'AIzaSyC1vQgXDTZERZX1gaJGMhC8_irbAqjKauQ'; // Reemplaza 'TU_CLAVE_API' con tu clave real si no usas variables de entorno
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }); // Puedes cambiar el modelo si es necesario

const ChatbotScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    setMessages([...messages, `Tú: ${input}`]);

    try {
      const result = await model.generateContent(input); // Usando generateContent
      const response = await result.response;
      const botMessage = response.text(); // Extrayendo el texto de la respuesta
      setMessages([...messages, `Tú: ${input}`, `Bot: ${botMessage}`]);
    } catch (error) {
      console.error('Error al obtener respuesta del chatbot:', error);
      setMessages([...messages, `Tú: ${input}`, `Bot: Error: No se pudo obtener una respuesta.`]);
    }

    setInput('');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <Text key={index} style={styles.message}>{msg}</Text>
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Escribe tu pregunta..."
      />
      <Button title="Enviar" onPress={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 10,
  },
  message: {
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default ChatbotScreen;


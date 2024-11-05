// ChatbotScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useClipboard } from '@react-native-clipboard/clipboard';

// Accede a tu clave de API como una variable de entorno (Mejor práctica de seguridad)
const apiKey = process.env.API_KEY || 'AIzaSyC1vQgXDTZERZX1gaJGMhC8_irbAqjKauQ'; // Reemplaza 'TU_CLAVE_API' con tu clave real si no usas variables de entorno
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const ChatbotScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  // Mensaje de introducción al cargar el componente (useEffect para que se ejecute solo una vez)
  useEffect(() => {
    setMessages([
      'Bot: Hola, soy tu asistente virtual de emergencias. Pregúntame lo que quieras.'
    ]);
  }, []);

  const handleSend = async () => {
    // Validación de entrada (Evita enviar mensajes vacíos)
    if (input.trim() === '') return;

    setMessages([...messages, `Tú: ${input}`]);

    try {
      // Llamada a la API de Gemini (Usando generateContent como en la documentación)
      // Ingeniería de prompts para especializar en primeros auxilios
      const prompt = `Eres un asistente virtual especializado en primeros auxilios, en México. Responde a la siguiente pregunta como un experto en primeros auxilios, teniendo en cuenta las últimas recomendaciones y mejores prácticas: ${input}`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const botMessage = response.text();
      setMessages([...messages, `Tú: ${input}`, `Bot: ${botMessage}`]);
    } catch (error) {
      // Manejo de errores (Muestra un mensaje de error al usuario)
      console.error('Error al obtener respuesta del chatbot:', error);
      setMessages([...messages, `Tú: ${input}`, `Bot: Error: No se pudo obtener una respuesta.`]);
    }

    // Limpia el input después de enviar el mensaje
    setInput('');
  };

  // Función para limpiar el historial de mensajes
  const handleClear = () => {
    setMessages([
      'Bot: Hola, soy tu asistente virtual de emergencias. Pregúntame lo que quieras.'
    ]);
  };
  const handleCopy = (text: string) => {
      const [_, setClipboard] = useClipboard();
      setClipboard(text);
    Alert.alert('¡Copiado!', 'El texto se ha copiado al portapapeles.');
  };

  return (
    <View style={styles.container}>
            <ScrollView style={styles.messagesContainer}>
        {/* Imagen del asistente */}
        <Image source={require('../assets/images/logo-bot.png')} style={styles.botImage} />
        {messages.map((msg, index) => {
          const isBotMessage = msg.startsWith('Bot:');
          return (
            <TouchableOpacity 
              key={index} 
              onLongPress={() => isBotMessage && handleCopy(msg.replace('Bot: ', ''))}
            >
              <Text style={styles.message}>{msg}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Escribe tu pregunta..."
      />
      {/* Contenedor para los botones (Permite colocarlos uno al lado del otro) */}
      <View style={styles.buttonContainer}>
        <Button title="Enviar" onPress={handleSend} />
        <Button title="Limpiar" onPress={handleClear} />
      </View>
    </View>
  );
};

// Estilos (Organizados para facilitar la lectura)
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
  botImage: {
    marginTop: 15,
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ChatbotScreen;

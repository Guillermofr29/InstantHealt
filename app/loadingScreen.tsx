import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styled } from 'nativewind';
import { useRouter } from 'expo-router'; // Importar router para navegación

const Container = styled(View);
const LoadingText = styled(Text);

const LoadingScreen :React.FC<{ navigation: any }> = ({ navigation }) => {
  const [isAppReady, setIsAppReady] = useState(false);
  const router = useRouter(); // Inicializar router para navegación

  useEffect(() => {
    // Simula un tiempo de carga
    setTimeout(() => {
      setIsAppReady(true);
    }, 1500); // 1.5 segundos
  }, []);

  // Navegar a la pantalla de login cuando la app esté lista 
  useEffect(() => {
    if (isAppReady) {
      navigation.navigate("Login") // Redirige a la pantalla de login
    }
  }, [isAppReady, router]);

  return (
    <Container className="flex-1 items-center justify-center bg-white">
      <ActivityIndicator size="large" color="#00bcd4" />
      <LoadingText className="text-lg mt-4 text-black">
        Cargando...
      </LoadingText>
    </Container>
  );
};

export default LoadingScreen;
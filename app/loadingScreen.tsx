import React, { useState, useEffect } from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';
import { View, Text, ActivityIndicator } from 'react-native';
import { styled } from 'nativewind';
import { useRouter } from 'expo-router'; // Importar router para navegación

const Container = styled(View);
const LoadingText = styled(Text);

const LoadingScreen: React.FC = () => {
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
      router.replace("/login"); // Redirige a la pantalla de login
    }
  }, [isAppReady, router]);

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isAppReady}
      logoImage={require('../assets/images/logo.png')}
      backgroundColor="red"
      logoHeight={150}
      logoWidth={150}
    >
      <Container className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#00bcd4" />
        <LoadingText className="text-lg mt-4 text-gray-700">
          InstantHealth
        </LoadingText>
      </Container>
    </AnimatedSplash>
  );
};

export default LoadingScreen;
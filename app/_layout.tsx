import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigation from './navigations/DrawerNavigation';
import CourseHome from '@/Components/CourseHome';
import Login from './login';
import Register from './register';
import { CallComponent } from '@/Components';
import LoadingScreen from './loadingScreen';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync

const Stack = createNativeStackNavigator();


export default function RootLayout() {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName='Loading'
    >
      <Stack.Screen name='Loading' component={LoadingScreen} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Main' component={DrawerNavigation} />
      <Stack.Screen name='Component' component={CallComponent} />
      <Stack.Screen name='Register' component={Register} />

    </Stack.Navigator>
  );
}


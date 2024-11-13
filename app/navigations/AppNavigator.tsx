import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigation from './DrawerNavigation';
import ChapterComponent from '@/Components/Courser/Chapter';
import CourseHome from '@/Components/CourseHome';
import Login from '../login';
import LoadingScreen from '../loadingScreen';

const Stack = createNativeStackNavigator();



const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName='Login'
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Main' component={DrawerNavigation} />
        <Stack.Screen name='Chapter' component={CourseHome} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
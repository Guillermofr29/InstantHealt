import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();



const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName='Main'
      >
        <Stack.Screen name='Main' component={DrawerNavigation} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
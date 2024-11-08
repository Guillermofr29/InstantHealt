import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import Certifies from './Certifies';
import Profile from '@/Components/UserPanel/Profile';

const Drawer = createDrawerNavigator();

const DrawerLayout = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerStyle: {
        backgroundColor: 'white',
        width: 250,
      },
    }}
    >
      <Drawer.Screen name="Certifies" component={Certifies} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default DrawerLayout;
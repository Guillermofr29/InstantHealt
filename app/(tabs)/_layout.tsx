import { Tabs } from "expo-router";
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from '@/components/TabBar'
import { Text } from "react-native";


const TabsLayout = () => {
  return ( 
    <Tabs tabBar={props => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home"}} />
      <Tabs.Screen name="course" options={{ title: "Course"}} />
      <Tabs.Screen name="call" options={{ title: "Call"}} />
      <Tabs.Screen name="help" options={{ title: "Help"}} />
    </Tabs>

  );
};

export default TabsLayout;

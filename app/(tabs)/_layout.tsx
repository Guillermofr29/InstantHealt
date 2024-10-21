import { Tabs } from "expo-router";
import React from "react";
import {TabBar} from '@/Components/TabBar'

const TabsLayout = () => {
  return (
    <Tabs tabBar={props => <TabBar {...props} />}>
      <Tabs.Screen name="index" options={{ title: "Home"}} />
      <Tabs.Screen name="course" options={{ title: "Course"}} />
      <Tabs.Screen name="call" options={{ title: "Call"}} />
      <Tabs.Screen name="help" options={{ title: "Help"}} />
    </Tabs>

  );
};

export default TabsLayout;

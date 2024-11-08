import { View,Text, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeComponent from "@/Components/Home";
import ChatbotScreen from "@/Components/ChatbotScreen";
import { TabBar } from "@/Components/TabBar/TabBar";
import { Courses } from "@/Components/Courses";
import CallComponent from "@/Components/Call";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator

        tabBar={props => <TabBar {...props} />}
        screenOptions={{
            headerShown: false
        }}
        >
            <Tab.Screen name="index" component={HomeComponent} options={{ title: "Home"}}/>
            <Tab.Screen name="course" component={Courses} options={{ title: "Course"}} />
            <Tab.Screen name="call" component={CallComponent} options={{ title: "Call"}}/>
            <Tab.Screen name="chatbotScreen" component={ChatbotScreen} options={{ title: "Chatbot"}} />
           
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

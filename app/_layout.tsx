import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { Text, View } from "react-native";
import Login from "@/app/login";
import Home from "./(tabs)";
import LoadingScreen from "./loadingScreen";
import { router, Slot, Stack } from "expo-router";
import 'react-native-reanimated'
import 'react-native-gesture-handler'

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  useEffect(() => {
    router.push("/loadingScreen");
  });
  return <Slot />;
}

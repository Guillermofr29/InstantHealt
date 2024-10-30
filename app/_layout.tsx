import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { Text, View } from "react-native";
import Login from "@/app/login";
import Home from "./(tabs)";
import { router, Slot, Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  useEffect(() => {
    router.push("/(tabs)");
  });

  return <Slot />;
}

import { View, Text, TouchableOpacity, StyleSheet, LayoutChangeEvent } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabBarButton from '@/Components/TabBarButton';

import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import Course from "@/app/(tabs)/course";
import Call from "@/app/(tabs)/call";
import Help from "@/app/(tabs)/help";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {

    const [dimensions, setDimensions] = React.useState({ height:20, width:100 });

    const buttonWidth = dimensions.width / state.routes.length;

    const onTabbarLayout = (e:LayoutChangeEvent) => {
        setDimensions({
            height: e.nativeEvent.layout.height,
            width: e.nativeEvent.layout.width
        })
    }

    const tabPositionX = useSharedValue(0);

    const animatedStyle =  useAnimatedStyle(() => {
        return {
            transform: [{ translateX: tabPositionX.value }]
        }
    });

    const routeLabels: { [key: string]: string } = {
        index: "Inicio",
        course: "Cursos",
        call: "Llamar",
        help: "Ayuda"
    };


  return (
    <View onLayout={onTabbarLayout} style={styles.tabbar}>
        <Animated.View style={ [animatedStyle, {
        position: "absolute",
            backgroundColor: "#BE1622",
            borderRadius: 38,
            marginHorizontal: 9,
            height: dimensions.height - 5,
            width: buttonWidth - 15,
            
        }]}
        />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label: string = routeLabels[route.name];

          typeof options.tabBarLabel === "string"
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
            tabPositionX.value = withSpring(
                buttonWidth * index,
                { duration :1500 }
            )
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
            <TabBarButton
                key={route.key}
                onPress={onPress}
                onLongPress={onLongPress}
                isFocused={isFocused}
                routeName={route.name}
                color={isFocused ? "#673ab7" : "#222"} 
                label={label}        

            />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 80,
    paddingVertical: 15,
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  }
});

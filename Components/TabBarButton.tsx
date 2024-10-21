import React, { useEffect } from "react";
import { GestureResponderEvent, Pressable, StyleSheet, Text } from "react-native";
import { Icon } from "@/Components/Icon";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const TabBarButton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  color,
  label,
}: {
  onPress: (event: GestureResponderEvent) => void;
  onLongPress: (event: GestureResponderEvent) => void;
  isFocused: Boolean;
  routeName: string; 
  color: string;
  label: string;
}) => {
  const scale = useSharedValue(0);


  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { duration: 350 });
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [0.8, 1], "clamp");
    const top = interpolate(scale.value, [0, 1], [10, 0], "clamp");

    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  
  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [0, 1], "clamp");
  
    return {
      opacity,
    };
  });
  
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={style.tabbarItem}
    >
      <Animated.View style={
        animatedIconStyle
      }>
        {Icon[routeName] && Icon[routeName]({ color: isFocused ? "#FFF" : "#000", forceColor: true })}
      </Animated.View>
      
      <Animated.Text
        style={[{ color: isFocused ? "#FFF" : "#000", fontSize: 12 }, animatedTextStyle]}
      >
        {label}
      </Animated.Text>

    </Pressable>
  );
};

export default TabBarButton;

const style = StyleSheet.create({
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});


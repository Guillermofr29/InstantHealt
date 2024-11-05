import React from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { Feather } from "@expo/vector-icons";

export const Icon: { [key: string]: (props: any) => JSX.Element } = {
  index: (props: any) => <Feather name="home" size={30} {...props} />,
  course: (props: any) => <Feather name="book" size={30} {...props} />,
  call: (props: any) => <Feather name="phone" size={30} {...props} />,
  chatbotScreen: (props: any) => <MaterialCommunityIcons name="robot-outline" size={30} color="black" {...props} />,
};

import React from "react";
import { Feather } from "@expo/vector-icons";

export const Icon: { [key: string]: (props: any) => JSX.Element } = {
  index: (props: any) => <Feather name="home" size={30} {...props} />,
  course: (props: any) => <Feather name="book" size={30} {...props} />,
  call: (props: any) => <Feather name="phone" size={30} {...props} />,
  help: (props: any) => <Feather name="help-circle" size={30} {...props} />,
};

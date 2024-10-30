import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import 'react-native-gesture-handler';

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView>
    <Drawer>
        <Drawer.Screen name="Certifies" options={{}} />
        <Drawer.Screen name="Notifications" options={{}} />
        <Drawer.Screen name="Profile" options={{}} />
    </Drawer>
</GestureHandlerRootView>
  );
}

export default DrawerLayout;
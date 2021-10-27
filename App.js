import React from "react";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/MealsNavigator";

enableScreens();

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

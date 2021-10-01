import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Loading from "./src/screens/Loading";
import LiquidSwipe from "./src/screens/LiquidSwipe";

import PhoneEnter from "./src/screens/PhoneEnter";
import Otp from "./src/screens/OTP";
import Screen_5 from "./src/screens/Screen_5";
import ModelScreen from "./src/screens/ModelScreen";

const Stack = createStackNavigator();

const UserDetails = () => (
  <Stack.Navigator initialRouteName="LiquidSwipe" headerMode="none">
    <Stack.Screen name="PhoneEnter" component={PhoneEnter} />
    <Stack.Screen name="Otp" component={Otp} />
    <Stack.Screen name="LiquidSwipe" component={LiquidSwipe} />
    <Stack.Screen name="Screen_5" component={Screen_5} />
  </Stack.Navigator>
);

const Model = () => (
  <Stack.Navigator headerMode="none" mode="modal">
    <Stack.Screen name="UserDetails" component={UserDetails} />
    <Stack.Screen name="ModelScreen" component={ModelScreen} />
  </Stack.Navigator>
);

export default function App() {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1059);
  });
  if (isLoading) return <Loading />;

  return (
    <NavigationContainer>
      <Model />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

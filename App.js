import React from "react";
import Main from "./Main";
import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <Main />
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}

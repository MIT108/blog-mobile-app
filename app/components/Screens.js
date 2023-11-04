import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import colors from "../config/colors";

const Screens = ({ children, style, containerStyle }) => {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
    {
        containerStyle?.backgroundColor === colors.black && (
            <StatusBar barStyle="light-content" />
        )
    }
        <View style={[styles.screen, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 20,
  },
  container: {
    backgroundColor: colors.white,
    height: "100%",
  },
});

export default Screens;

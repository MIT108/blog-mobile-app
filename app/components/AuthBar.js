import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

const AuthBar = ({
    rightText,
    rightAction = () => console.log("right action"),
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" color={colors.black} size={25} />
      </TouchableOpacity>
      {rightText && (
        <TouchableOpacity onPress={rightAction}>
          <Text style={styles.rightText}>{rightText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backContainer: {
    borderWidth: 1,
    borderColor: colors.lightViolet,
    padding: 7,
    borderRadius: 50,
  },
  rightText: {
    color: colors.violet,
  },
});

export default AuthBar;

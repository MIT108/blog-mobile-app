import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Screens from "../../components/Screens";
import colors from "../../config/colors";
import routeName from "../../route/routeName";
import AuthBar from "../../components/AuthBar";

const LoginPasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState(true);
  return (
    <Screens>
      <AuthBar rightText={"Forgot password ?"}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <Text style={styles.title}>Welcome to confect</Text>
        <Text style={styles.description}>Enter your password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            secureTextEntry={password}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setPassword(!password)}>
            <Ionicons
              name={password ? "eye-off" : "eye"}
              size={25}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate(routeName.LoginPasswordScreen)}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </Screens>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginTop: 200,
    color: colors.black,
  },
  description: {
    color: colors.textGray,
    fontSize: 15,
    marginTop: 5,
  },
  inputContainer: {
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightViolet,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    fontSize: 15,
    color: colors.black,
  },
  buttonContainer: {
    backgroundColor: colors.lightViolet,
    marginTop: 100,
    width: "80%",
    alignSelf: "center",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  buttonText: {
    color: colors.white,
    fontSize: 12,
  },
});

export default LoginPasswordScreen;

import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import UserAvatar from "react-native-user-avatar";
import Screens from "../../components/Screens";
import colors from "../../config/colors";
import routeName from "../../route/routeName";
import AuthBar from "../../components/AuthBar";

const RegisterScreen = ({ navigation }) => {
  const [password, setPassword] = useState(true);
  const [name, setName] = useState("");
  const [cPassword, setCPassword] = useState(true);
  return (
    <Screens>
      <AuthBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <Text style={styles.title}>Start your Profile</Text>
        <Text style={styles.description}>
          This is how you're displayed in the community
        </Text>
        <View style={styles.profileContainer}>
          {name.length > 0 ? (
            <UserAvatar name={name} size={80} />
          ) : (
            <View style={styles.avatarContainer}>
              <Feather name="user" size={40} color={colors.black} />
            </View>
          )}
          <View style={styles.nameContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="User Name" style={styles.input} />
            </View>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Email" style={styles.input} />
        </View>
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
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={cPassword}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setCPassword(!cPassword)}>
            <Ionicons
              name={cPassword ? "eye-off" : "eye"}
              size={25}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate(routeName.OtpScreen)}
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
    marginTop: 100,
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
  profileContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarContainer: {
    backgroundColor: colors.lightGray,
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  nameContainer: {
    flex: 1,
    marginLeft: 20,
  },
});

export default RegisterScreen;

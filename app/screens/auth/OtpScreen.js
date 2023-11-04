import React, { useState } from "react";
import { View, TextInput, StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native";
import Screens from "../../components/Screens";
import AuthBar from "../../components/AuthBar";
import colors from "../../config/colors";

const OtpScreen = () => {
  const [otp, setOtp] = useState(["", "", "", ""]); // Initialize an array to store OTP values
  const inputRefs = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]; // Create refs for each input

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      // Move the focus to the next input when a digit is entered
      inputRefs[index + 1].current.focus();
    } else if (!value && index > 0) {
      // Move the focus to the previous input when a digit is deleted
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <Screens>
      <AuthBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <Text style={styles.title}>Verification code</Text>
        <Text style={styles.description}>We send code to miendjemthierry@gmail.com</Text>

        <View style={styles.container}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={styles.input}
              onChangeText={(text) => handleOtpChange(index, text)}
              value={value}
              maxLength={1}
              keyboardType="numeric"
              ref={inputRefs[index]}
            />
          ))}
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
  container: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    width: 80,
    height: 80,
    borderWidth: 1,
    fontSize: 30,
    borderColor: colors.lightViolet,
    borderRadius: 50,
    textAlign: "center",
    margin: 10,
  },
  scrollView: {
    height: "100%",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginTop: 150,
    color: colors.black,
  },
  description: {
    color: colors.textGray,
    fontSize: 15,
    marginTop: 5,
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

export default OtpScreen;

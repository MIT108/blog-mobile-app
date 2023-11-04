import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Screens from "../../components/Screens";
import colors from "../../config/colors";
import routeName from "../../route/routeName";

const LandingScreen = ({ navigation }) => {
  return (
    <Screens>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>C</Text>
        </View>
        <Text style={styles.title}>
          We are preparing something great for you !
        </Text>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate(routeName.RegisterScreen)}
        >
          <Text style={styles.buttonText}>Register now</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.question}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(routeName.LoginUsernameScreen)}
          >
            <Text style={styles.login}>login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.termsContainer}>
        <Text style={styles.terms}>By continuing, you accept the</Text>
        <Text style={styles.underlineTerms}>Terms of us</Text>
        <Text style={styles.terms}>and</Text>
        <Text style={styles.underlineTerms}> Privacy policy</Text>
      </View>
    </Screens>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: "80%",
  },
  logoContainer: {
    marginTop: 150,
    backgroundColor: colors.violet,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  logo: {
    color: colors.white,
    fontSize: 40,
  },
  title: {
    fontSize: 40,
    marginTop: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: colors.black,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  termsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 50,
    width: "65%",
    flexWrap: "wrap",
  },
  question: {
    color: colors.textGray,
    fontSize: 15,
  },
  terms: {
    color: colors.textGray,
    fontSize: 12,
  },
  login: {
    color: colors.violet,
    fontSize: 15,
    marginLeft: 5,
    textDecorationLine: "underline",
  },
  underlineTerms: {
    color: colors.textGray,
    textTransform: "capitalize",
    fontSize: 12,
    marginHorizontal: 5,
    textDecorationLine: "underline",
  },
  buttonContainer: {
    backgroundColor: colors.violet,
    marginTop: 40,
    width: "100%",
    alignSelf: "center",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  buttonText: {
    color: colors.white,
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default LandingScreen;

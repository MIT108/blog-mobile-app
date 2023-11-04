import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UserAvatar from "react-native-user-avatar";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";

const UserHomePostItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <UserAvatar name={"Max Lilian"} size={40} />
        <View style={styles.headerInfo}>
          <View style={styles.header}>
            <Text style={styles.userName}>Max Lilian</Text>
            <View style={styles.header}>
              <Text style={styles.key}>Date</Text>
              <Text style={styles.value}>: 8/18/2021</Text>
            </View>
          </View>
          <View style={styles.topic}>
            <Text style={styles.key}>Topic</Text>
            <Text style={styles.value}>: Why you need UX design?</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>
          why UX design is more important that UI design
        </Text>
        <Text style={styles.question}>Why you need UX design?</Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.description}>
          As a founder of UI i discovered that all we need is to go
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Read Time : 5 min</Text>
        <Ionicons
          name="ios-bookmark-outline"
          color={colors.textGray}
          size={25}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: colors.heavyGray,
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerInfo: {
    flex: 1,
    marginLeft: 20,
  },
  userName: {
    flex: 1,
    textTransform: "capitalize",
    color: colors.white,
    fontSize: 20,
  },
  topic: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  key: {
    color: colors.textGray,
  },
  value: {
    color: colors.white,
    marginLeft: 5,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerText: {
    color: colors.green,
  },
  body: {
    marginVertical: 20,
  },
  title: {
    color: colors.white,
    textTransform: "capitalize",
    fontSize: 30,
    fontWeight: "bold",
  },
  question: {
    marginVertical: 15,
    color: colors.textGray,
    fontSize: 20,
  },
  description: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "200",
  },
});

export default UserHomePostItem;

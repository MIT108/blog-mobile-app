import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import UserAvatar from "react-native-user-avatar";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import Screens from "../../components/Screens";
import colors from "../../config/colors";
import UserHomePostItem from "../../components/UserHomePostItem";

const categories = ["UI Design", "UX Design", "Visual Design"];

const CategoryItem = ({ item, setActiveCategory, activeCategory }) => {
  return (
    <TouchableOpacity
      style={[
        styles.categoryContainer,
        activeCategory === item ? styles.activeCategoryContainer : null,
      ]}
      onPress={() => setActiveCategory(item)}
    >
      <Text
        style={[
          styles.category,
          activeCategory === item ? styles.activeCategory : null,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const UserHomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  return (
    <Screens containerStyle={{ backgroundColor: colors.black }}>
      <View style={styles.header}>
        <UserAvatar name={"Miendjem Thierry"} size={50} />
        <TouchableOpacity style={styles.notification}>
          <EvilIcons name="bell" size={30} color={colors.white} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Explore</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {categories.map((category) => (
          <CategoryItem
            key={category}
            item={category}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sortContainer}>
          <Text style={styles.followingText}>Following</Text>
          <View style={styles.header}>
            <Text style={styles.sortText}>Sort By</Text>
            <Ionicons name={"ios-filter"} size={24} color="white" />
          </View>
        </View>
        <View>
          {categories.map((category) => (
            <UserHomePostItem
                key={category}
            />
          ))}
        </View>
      <View style={styles.gap} />
      </ScrollView>
    </Screens>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notification: {
    borderWidth: 1,
    borderColor: colors.textGray,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    marginVertical: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  activeCategoryContainer: {
    backgroundColor: colors.yellow,
  },
  activeCategory: {
    color: colors.black,
  },
  categoryContainer: {
    marginRight: 15,
    height: 30,
    marginBottom: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.textGray,
  },
  category: {
    fontWeight: "bold",
    color: colors.white,
  },
  sortContainer: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  followingText: {
    textTransform: "uppercase",
    fontSize: 15,
    color: colors.white,
  },
  sortText: {
    textTransform: "capitalize",
    fontSize: 15,
    color: colors.white,
    marginRight: 10,
  },
  gap: {
    height: 150,
  }
});

export default UserHomeScreen;

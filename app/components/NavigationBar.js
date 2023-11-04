import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

import routeName from "../route/routeName";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";

function NavigationBar({ state, descriptors, navigation }) {
  return (
    <View style={[styles.container]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        let label;
        if (options.tabBarLabel !== undefined) {
          label = options.tabBarLabel;
        } else if (options.title !== undefined) {
          label = options.title;
        } else {
          label = route.name;
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const _imageIcon = (routeNames) => {
          const { name } = routeNames;
          switch (name) {
            case routeName.HomeStack:
              return !isFocused ? (
                <Ionicons
                  name="home"
                  size={30}
                  color={colors.textGray}
                />
              ) : (
                <Ionicons
                  name="home"
                  size={30}
                  color={colors.white}
                />
              );
            case routeName.SearchStack:
              return !isFocused ? (
                <AntDesign
                  name="search1"
                  size={30}
                  color={colors.textGray}
                />
              ) : (
                <AntDesign
                  name="search1"
                  size={30}
                  color={colors.white}
                />
              );
            case routeName.PostStack:
              return <Entypo
                  name="plus"
                  size={50}
                  color={colors.white}
                />
            case routeName.FavoriteStack:
              return !isFocused ? (
                <Ionicons
                  name="bookmark"
                  size={30}
                  color={colors.textGray}
                />
              ) : (
                <Ionicons
                  name="bookmark"
                  size={30}
                  color={colors.white}
                />
              );
            case routeName.SettingStack:
              return !isFocused ? (
                <Ionicons
                  name="settings-outline"
                  size={30}
                  color={colors.textGray}
                />
              ) : (
                <Ionicons
                  name="settings"
                  size={30}
                  color={colors.white}
                />
              );
            default:
              break;
          }
          return 0;
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              { flex: 1, alignItems: "center" },
              label === routeName.PostStack ? styles.middle : null,
            ]}
          >{_imageIcon(route)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default NavigationBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5, // Shadow elevatio
  },
  middle: {
    backgroundColor: colors.violet,
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5, 
  },
});

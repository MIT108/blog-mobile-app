import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginUsernameScreen from "../screens/auth/LoginUsernameScreen";
import routeName from "./routeName";
import LoginPasswordScreen from "../screens/auth/LoginPasswordScreen";
import LandingScreen from "../screens/auth/LandingScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import OtpScreen from "../screens/auth/OtpScreen";
import NavigationBar from "../components/NavigationBar";
import UserHomeScreen from "../screens/user/UserHomeScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack(){
  return(

    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
    
    <Stack.Screen
      name={routeName.UserHomeScreen}
      component={UserHomeScreen}
    />
    </Stack.Navigator>
  )
}

function SearchStack(){
  return(

    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
    
    <Stack.Screen
      name={routeName.LandingScreen}
      component={LandingScreen}
    />
    </Stack.Navigator>
  )
}


function PostStack(){
  return(

    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
    
    <Stack.Screen
      name={routeName.LandingScreen}
      component={LandingScreen}
    />
    </Stack.Navigator>
  )
}


function FavoriteStack(){
  return(

    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
    
    <Stack.Screen
      name={routeName.LandingScreen}
      component={LandingScreen}
    />
    </Stack.Navigator>
  )
}

function SettingStack(){
  return(

    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
    
    <Stack.Screen
      name={routeName.LandingScreen}
      component={LandingScreen}
    />
    </Stack.Navigator>
  )
}

function UserStack() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      tabBar={(props) => <NavigationBar {...props} />}
    >
      <Tab.Screen name={routeName.HomeStack} component={HomeStack} />
      <Tab.Screen name={routeName.SearchStack} component={SearchStack} />
      <Tab.Screen name={routeName.PostStack} component={PostStack} />
      <Tab.Screen name={routeName.FavoriteStack} component={FavoriteStack} />
      <Tab.Screen name={routeName.SettingStack} component={SettingStack} />
    </Tab.Navigator>
  )
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
    
    <Stack.Screen
      name={routeName.LandingScreen}
      component={LandingScreen}
    />
    
    <Stack.Screen
      name={routeName.RegisterScreen}
      component={RegisterScreen}
    />
    <Stack.Screen
      name={routeName.OtpScreen}
      component={OtpScreen}
    />
    
    <Stack.Screen
      name={routeName.LoginUsernameScreen}
      component={LoginUsernameScreen}
    />
      <Stack.Screen
        name={routeName.LoginPasswordScreen}
        component={LoginPasswordScreen}
      />
    </Stack.Navigator>
  );
}

export { AuthStack, UserStack };

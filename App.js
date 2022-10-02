import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useContext, useEffect, useCallback } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthContextProvider, { AuthContext } from './store/auth-context';
import AppLoading from 'expo-app-loading';
import Font from "./style/Font";
import AvailabilitySummaryScreen from "./screens/CalendarScreen/AvailabilitySummaryScreen/AvailabilitySummaryScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignupScreen from "./screens/Authentication/SignupScreen/SignupScreen";
import SigninScreen from "./screens/Authentication/SigninScreen/SigninScreen";
import CalendarScreen from "./screens/CalendarScreen/CalendarScreen";
import PostsScreen from "./screens/PostsScreen/PostsScreen";
import ChatScreen from "./screens/ChatScreen/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import { useTokenStorage } from "./screens/Authentication/util/useTokenStorage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={SigninScreen}   
      screenOptions={{
        headerShown: false,
      }}/>
      <Stack.Screen name="Signup" component={SignupScreen}
        screenOptions={{
        headerShown: false,
      }}/>
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        showLabel: false,
        //TODO: tabBarActiveTintColor not working
      }}>
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="calendar"
              color={focused ? "orange" : "grey"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Entypo
              name="slideshare"
              color={focused ? "orange" : "grey"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Entypo
              name="chat"
              color={focused ? "orange" : "grey"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome
              name="user"
              color={focused ? "orange" : "grey"}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}


export default function App() {
  return (
    <>
      <AuthContextProvider>
        <StatusBar style="light" />

        <Navigation />
      </AuthContextProvider>
    </>
  );
}

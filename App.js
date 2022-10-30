import { StatusBar } from "expo-status-bar";
import { useState, useContext, useEffect, useCallback } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignupScreen from "./screens/Authentication/SignupScreen/SignupScreen";
import SigninScreen from "./screens/Authentication/SigninScreen/SigninScreen";
import CalendarScreen from "./screens/CalendarScreen/CalendarScreen";
import PostsScreen from "./screens/PostsScreen/PostsScreen";
import ChatScreen from "./screens/ChatScreen/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import AvailabilitySummaryScreen from "./screens/CalendarScreen/AvailabilitySummaryScreen/AvailabilitySummaryScreen";

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

function AuthenticatedTab() {
  const authCtx = useContext(AuthContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        showLabel: false,
        tabBarLabelStyle:{
          display: "none"
        },
      }}>
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="calendar"
              color={focused ? "#8E29F2" : "grey"}
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
              color={focused ? "#8E29F2" : "grey"}
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
              color={focused ? "#8E29F2" : "grey"}
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
              color={focused ? "#8E29F2" : "grey"}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AuthenticatedStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen
        name = "AuthenticatedTab"
        component={AuthenticatedTab}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name = "Availability"
        component={AvailabilitySummaryScreen}
        options={{ headerShown: true}}
      />
    </Stack.Navigator>
  )
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
        <StatusBar style="dark" />

        <Navigation />
      </AuthContextProvider>
    </>
  );
}

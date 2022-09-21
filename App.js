import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useContext, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider, { AuthContext } from './store/auth-context';
import Font from "./style/Font";
import BottomTabs from "./components/navigations/BottomTabs";
import AvailabilitySummaryScreen from "./screens/CalendarScreen/AvailabilitySummaryScreen/AvailabilitySummaryScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from "./screens/Authentication/SignupScreen/SignupScreen";
import SigninScreen from "./screens/Authentication/SigninScreen/SigninScreen";

const Stack = createNativeStackNavigator();

function AuthenticatedStack(){
  const authCtx = useContext(AuthContext);
  return (
    <View style={styles.rootContainer}>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
            name="BottomTab"
            component={BottomTabs}
            options={{
              headerShown: false,
            }}
          />
       <Stack.Screen name="Availability" component={AvailabilitySummaryScreen} />
       <Stack.Screen name="Signin" component={SigninScreen} />
       <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

function AuthenticationStack(){
  const authCtx = useContext(AuthContext);
  return (
    <View style={styles.rootContainer}>
      <NavigationContainer>
      <Stack.Navigator >
       <Stack.Screen name="Signin" component={SigninScreen} options={{
              headerShown: false,
            }}/>
       <Stack.Screen name="Signup" component={SignupScreen} options={{
              headerShown: false,
            }}/>
      </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default function App() {
  //Authentication
  const authCtx = useContext(AuthContext);

  <Font />
  //rendering
  return (
    <>
      {authCtx.isAuthenticated && <AuthenticatedStack />}
      {!authCtx.isAuthenticated && <AuthenticationStack />}
    </>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
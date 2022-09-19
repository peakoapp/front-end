import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useContext, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider, { AuthContext } from './store/auth-context';

import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

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

  //using custom fonts
  const [fontsLoaded] = useFonts({
    'poppins-extralight':require('./assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
    'poppins-italic':require('./assets/fonts/Poppins/Poppins-Italic.ttf'),
    'poppins-light': require('./assets/fonts/Poppins/Poppins-Light.ttf'),
    'poppins-medium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'poppins-thin': require('./assets/fonts/Poppins/Poppins-Thin.ttf'),
    'poppins-semibold': require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
  })
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }

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
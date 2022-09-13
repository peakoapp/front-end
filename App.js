import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./components/navigations/BottomTabs";
import AvailabilitySummaryScreen from "./screens/CalendarScreen/AvailabilitySummaryScreen/AvailabilitySummaryScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
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
      </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
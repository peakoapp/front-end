import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PressableBtn from "../../components/UIs/PressableBtn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AvailabilitySummaryScreen from "./AvailabilitySummaryScreen/AvailabilitySummaryScreen";

import CalendarComponent from "./components/CalendarComponent";

const Stack = createNativeStackNavigator();

function CalendarMain() {
  const navigation = useNavigation();
  function navToSummary() {
    navigation.navigate("Availability");
  }
  return (
    <View style={styles.rootContainer}>
      <View style={styles.summaryTabContainer}>
        <PressableBtn onPress={navToSummary}>Go to Summary</PressableBtn>
      </View>
      <View style={styles.calendarContainer}>
        <CalendarComponent />
      </View>
    </View>
  );
}

export default function CalendarScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CalendarMain"
        component={CalendarMain}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = "Availability"
        component={AvailabilitySummaryScreen}
        options={{ headerShown: true}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    top: "5%",
  },
  summaryTabContainer: {
    width: "80%",
    marginTop: "5%", 
    alignItems: "center", 
    padding: 10, 
  },
  calendarContainer: {
    flex: 1,
    width: '100%', 
  },
  button: {
    marginHorizontal: 8,
  },

  highlight: {
    fontWeight: "bold",
    color: "orange",
  },
});

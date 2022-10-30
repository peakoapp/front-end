import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PressableBtn from "../../components/UIs/PressableBtn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AvailabilitySummaryScreen from "./AvailabilitySummaryScreen/AvailabilitySummaryScreen";
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
        <Text>
          This is the <Text style={styles.highlight}>"Calendar"</Text> screen!
        </Text>
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
    flex: 6,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  summaryTabContainer: {
    width: "80%",
    marginTop: "30%",
    flex: 1,
  },
  button: {
    marginHorizontal: 8,
  },
  calendarContainer: {
    flex: 5,
  },
  highlight: {
    fontWeight: "bold",
    color: "orange",
  },
});

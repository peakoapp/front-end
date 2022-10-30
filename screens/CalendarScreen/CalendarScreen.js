import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PressableBtn from "../../components/UIs/PressableBtn";

export default function CalendarScreen() {
  const navigation = useNavigation();
  function navToSummary() {
    navigation.navigate("Availability");
  }
  return (
    <View style={styles.rootContainer}>
      <View style={styles.summaryTabContainer}>
        <PressableBtn
          onPress={navToSummary}>
          Go to Summary
        </PressableBtn>
      </View>
      <View style={styles.calendarContainer}>
        <Text>
          This is the <Text style={styles.highlight}>"Calendar"</Text> screen!
        </Text>
      </View>
    </View>
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

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, StyleSheet, StatusBar } from "react-native";
import ProfileOverview from "./components/ProfileOverview";
import ProfilePost from "./ProfilePost/ProfilePost";
import ProfileCalendar from "./ProfileCalendar/ProfileCalendar";
import ProfileList from "./ProfileList/ProfileList";

const Tab = createMaterialTopTabNavigator();
export default function ProfileScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.overviewContainer}>
        <ProfileOverview />
      </View>
      <View style={styles.navContainer}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle:{
              fontSize: 15
            },
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "black",
            tabBarIndicatorContainerStyle: {
              display: "none",
            },

            tabBarStyle: {
              backgroundColor: "#D6BBF2",
              position: "absolute",
              left: "5%",
              right: "5%",
              borderRadius: 20,
              height: "10%",
            },
          }}>
          <Tab.Screen
            name="Posts"
            component={ProfilePost}
            options={{}}
          />
          <Tab.Screen
            name="Calendar"
            component={ProfileCalendar}
            options={{}}
          />
          <Tab.Screen
            name="List"
            component={ProfileList}
            options={{}}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 3,
  },
  navContainer: {
    flex: 2,
  },
  overviewContainer: {
    flex: 1,
  },
});

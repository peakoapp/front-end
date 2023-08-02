import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import ProfileOverview from "./components/ProfileOverview";
import ProfilePost from "./ProfilePost/ProfilePost";
import ProfileCalendar from "./ProfileCalendar/ProfileCalendar";
import ProfileList from "./ProfileList/ProfileList";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileEdit from "./ProfileEdit/ProfileEdit";
import Setting from "./Setting/Setting";


const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function ProfileNavTab(){
  return(
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
            tabBarIndicatorStyle: {
              backgroundColor: "#0050B6",
              height: 45,
              borderRadius:20
            },

            tabBarStyle: {
              backgroundColor: "#D6BBF2",
              position: "absolute",
              left: "5%",
              right: "5%",
              borderRadius: 20,
              height: "9%",
            },
          }}>
          <Tab.Screen
            name="Posts"
            component={ProfilePost}
            options={{
              // todo: make this overlay
              // tabBarIcon: ({ focused, size }) => (
                
              //     <View>
              //     <Text style={{
              //       color: focused ? 'white' : 'black',
              //     }}>Post</Text>
              //     </View>
              // ),
            }} />
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
  )
}

export default function ProfileScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name = "ProfileNavTab"
        component={ProfileNavTab}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name = "Edit Profile"
        component={ProfileEdit}
        options={{ headerShown: true}}
      />
      <Stack.Screen
        name = "Setting"
        component={Setting}
        options={{ headerShown: true}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : '10%',
    flex: 3,
  },
  navContainer: {
    flex: 2,
  },
  overviewContainer: {
    flex: 1,
  },
});

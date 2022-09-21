import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import CalendarScreen from "../../screens/CalendarScreen/CalendarScreen";
import PostsScreen from "../../screens/PostsScreen/PostsScreen";
import ChatScreen from "../../screens/ChatScreen/ChatScreen";
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
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

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MessageScreen from './MessageScreen/MessageScreen'
import FriendScreen from './FriendScreen/FriendScreen';
import { View, Text, StyleSheet,StatusBar } from 'react-native';


const Tab = createMaterialTopTabNavigator();

export default function ChatScreen(){
    return (
      <View style={styles.rootContainer}>
        <View style={styles.navContainer}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle:{
              fontSize: 20
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
              marginTop: '10%',
              height: "7%",
            },
          }}>
          <Tab.Screen name="Messages" component={MessageScreen} />
          <Tab.Screen name="Friends" component={FriendScreen} />
        </Tab.Navigator>
        </View>
        
      </View>
        
      );
}

const styles = StyleSheet.create({
  rootContainer:{
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  navContainer:{
    flex: 1,
  }
})
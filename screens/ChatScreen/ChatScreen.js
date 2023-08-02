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
            tabBarLabelStyle: {
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
              marginTop: '20%',
              height: "5%",
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
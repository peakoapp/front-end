import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MessageScreen from './subscreens/Chat/MessageScreen';
import FriendScreen from './subscreens/Chat/FriendScreen';
import { View, Text, StyleSheet,StatusBar } from 'react-native';


const Tab = createMaterialTopTabNavigator();

export default function ChatScreen(){
    return (
      <View style={styles.rootContainer}>
        <View style={styles.navContainer}>
        <Tab.Navigator screenOptions={{
          tabBarLabelStyle: { fontSize: 20 },
          tabBarStyle: { backgroundColor: 'orange' },
        }}
          >
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
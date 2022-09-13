import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet,StatusBar } from 'react-native';
import ProfileOverview from './components/ProfileOverview';
import ProfilePostScreen from './ProfilePostScreen/ProfilePostScreen';
import ProfileCalendarScreen from './ProfileCalendarScreen/ProfileCalendarScreen';
import ProfileListScreen from './ProfileListScreen/ProfileListScreen';

const Tab = createMaterialTopTabNavigator();

export default function ProfileScreen(){
    return (
      <View style={styles.rootContainer}>
        <View style={styles.overviewContainer}>
        <ProfileOverview />
        </View>
        <View style={styles.navContainer}>
            <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 15 },
            tabBarStyle: { backgroundColor: 'orange' },
            }}
            >
            <Tab.Screen name="Posts" component={ProfilePostScreen} />
            <Tab.Screen name="Calendar" component={ProfileCalendarScreen} />
            <Tab.Screen name="List" component={ProfileListScreen} />
            </Tab.Navigator>
        </View>
        
      </View>
        
      );
}

const styles = StyleSheet.create({
  rootContainer:{
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 3,
  },
  navContainer:{
    flex: 2,
  },
  overviewContainer:{
    flex: 1
  }
})
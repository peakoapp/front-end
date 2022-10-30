import { View, Text, StyleSheet } from "react-native";
import FriendOverview from "./components/FriendOverview";


export default function FriendScreen(){
    return (
        <View style={styles.rootContainer}>
          {/* todo: make FriendsList flatlist, add toggle group */}
        <FriendOverview firstname={"Jaylan"} lastname={"Zhao"} picture={'https://image.shutterstock.com/image-vector/green-yellow-red-blue-black-260nw-1150376291.jpg'}></FriendOverview>
        <FriendOverview firstname={"Jaylan"} lastname={"Zhao"} picture={'https://image.shutterstock.com/image-vector/green-yellow-red-blue-black-260nw-1150376291.jpg'}></FriendOverview>
        <FriendOverview firstname={"Jaylan"} lastname={"Zhao"} picture={'https://image.shutterstock.com/image-vector/green-yellow-red-blue-black-260nw-1150376291.jpg'}></FriendOverview>
        <FriendOverview firstname={"Jaylan"} lastname={"Zhao"} picture={'https://image.shutterstock.com/image-vector/green-yellow-red-blue-black-260nw-1150376291.jpg'}></FriendOverview>
        <FriendOverview firstname={"Jaylan"} lastname={"Zhao"} picture={'https://image.shutterstock.com/image-vector/green-yellow-red-blue-black-260nw-1150376291.jpg'}></FriendOverview>
        <FriendOverview firstname={"Jaylan"} lastname={"Zhao"} picture={'https://image.shutterstock.com/image-vector/green-yellow-red-blue-black-260nw-1150376291.jpg'}></FriendOverview>
        
      </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    highlight: {
      fontWeight: 'bold',
      color: 'orange',
    },
  });
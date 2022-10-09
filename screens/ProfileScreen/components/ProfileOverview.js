import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import ProfileInfoEntry from "./ProfileInfoEntry";
import ProfileName from "./ProfileName";
import ProfileLocation from "./ProfileLocation";

export default function ProfileOverview() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.profileHeader}>
        <View style={styles.profileHeaderTab}>
        <Ionicons
              name="share"
              size={30}
            />
            <Ionicons
              name="settings"
              size={30}
            />
        </View>
      </View>
      <View style={styles.profileOverview}>
        <View style={styles.profileDetailContainer}>
          <View style={styles.profilePicContainer}>
            <Image
              source={require("../../../assets/dummy/dummyProfilepic.jpg")}
              style={styles.image}
              resizeMode="center"></Image>
          </View>
          <View style={styles.profileInfoContainer}>
            <ProfileName name={"Ashley"}></ProfileName>
            <ProfileInfoEntry
              entryname={"id"}
              entryinfo={"1101"}></ProfileInfoEntry>
            <ProfileLocation loc={"Chicago, IL"}></ProfileLocation>
          </View>
        </View>
        <View style={styles.profileBioContainer}>
          <Text>hi this is my bio and this is more more morreeeeeee</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "column",
  },
  profileHeader: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  profileHeaderTab:{
    flexDirection:'row',
    marginRight: 20,
    marginTop: 5
  },
  profileOverview: {
    backgroundColor: "#edb739",
    margin: 20,
    marginTop:5,
    borderRadius: 30,
  },
  profileDetailContainer: {
    flexDirection: "row",
  },
  profilePicContainer: {
    marginTop: 20,
    marginLeft: 30,
    width: 100,
    height: 100,
    borderRadius: 30,
    overflow: "hidden",
  },
  profileInfoContainer: {
    flex: 1,
    margin: 25,
  },
  profileBioContainer: {
    marginTop: 5,
    marginLeft: 40,
    paddingBottom: 15,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  highlight: {
    fontWeight: "bold",
    color: "orange",
  },
});

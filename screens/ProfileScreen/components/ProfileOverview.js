import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import ProfileInfoEntry from "./ProfileInfoEntry";
import ProfileName from "./ProfileName";
import ProfileLocation from "./ProfileLocation";
import { useNavigation } from "@react-navigation/native";

export default function ProfileOverview() {
  const navigation = useNavigation();
  function navToEdit() {
    navigation.navigate("Edit Profile");
  }
  return (
    <View style={styles.rootContainer}>
      <View style={styles.profileHeader}>
        <View style={styles.profileHeaderTab}>
          <Ionicons
            name="share-social-outline"
            size={30}
          />
          <Ionicons
            name="settings-outline"
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
          <View style={styles.bioTextContainer}>
            <Text>hi this is my bio and this is more more morreeeeeee</Text>
          </View>
          <View style={styles.editbtnContainer}>
            <Pressable
              style={({ pressed }) =>
                pressed
                  ? [styles.editbtn, styles.editbtnContainerPressed]
                  : styles.editbtn
              }
              onPress={navToEdit}>
              <Text style={styles.editbtnText}>Edit Profile</Text>
            </Pressable>
          </View>
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
    height: "18%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  profileHeaderTab: {
    flexDirection: "row",
    marginRight: "7%",
    marginTop: "3%",
    width: "25%",
    justifyContent: "space-between",
  },
  profileOverview: {
    backgroundColor: "#FFE3BF",
    margin: "7%",
    marginBottom: "2%",
    marginTop: "2%",
    borderRadius: 20,
  },
  profileDetailContainer: {
    flexDirection: "row",
  },
  profilePicContainer: {
    marginTop: "6%",
    marginLeft: "7%",
    width: 100,
    height: 100,
    borderRadius: 30,
    overflow: "hidden",
  },
  profileInfoContainer: {
    flex: 1,
    margin: "5%",
  },
  profileBioContainer: {
    marginTop: "2%",
    marginLeft: "10%",
    paddingBottom: "3%",
    justifyContent: "space-around",
    flexDirection: "row",
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
  bioTextContainer: {
    width: "70%",
  },
  editbtnContainer: {
    borderRadius: 5,
    overflow: "hidden",
    margin: "2%",
    marginRight: '7%'
  },
  editbtnContainerPressed: {
    opacity: 0.5
  },
  editbtn: {
    backgroundColor: '#CECECE',
    padding: '3%'
  },
  editbtnText: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
    fontWeight:'bold'
  }
});

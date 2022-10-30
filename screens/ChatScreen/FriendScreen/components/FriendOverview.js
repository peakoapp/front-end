import { View, Text, Image, StyleSheet } from "react-native";

const FriendOverview = ({ firstname, lastname, picture }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: picture }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {firstname} {lastname}
        </Text>
      </View>
    </View>
  );
};

export default FriendOverview;

const styles = StyleSheet.create({
    rootContainer: {
        height: 80,
        width: '90%',
        borderTopWidth:1,
        borderBottomWidth: 1,
        borderTopColor: '#FED4A3',
        borderBottomColor: '#FED4A3',
        flexDirection: 'row',
        alignItems:'center'
    },
    imageContainer: {

    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 20,
        resizeMode: "center",
    },
    textContainer:{
        margin: '5%'
    },
    text:{
        fontSize: 20
    }
});

import { View, Text, StyleSheet } from "react-native";


export default function ProfileOverview(){
    return (
        <View style={styles.rootContainer}>
        <Text>
          This is the <Text style={styles.highlight}>"Profile  Overview"</Text> component!
        </Text>
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
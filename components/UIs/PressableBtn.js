import { View, Text, StyleSheet, Pressable } from "react-native";

export default function PressableBtn({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "purple" }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 20,
    margin: 4,
    overflow: "hidden"
  },
  buttonInnerContainer: {
    backgroundColor: '#8E29F2',
    elevation: 2,
    padding: 15
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "poppins-semibold",
  },
  pressed: {
    opacity: 0.5,
  },
});

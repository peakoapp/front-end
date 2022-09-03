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
          android_ripple={{ color: 'purple' }}
        >
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>
    );
  }

const styles = StyleSheet.create({
buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
},
buttonInnerContainer: {
    backgroundColor: 'orange',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
},
buttonText: {
    color: 'white',
    textAlign: 'center',
},
pressed: {
    opacity: 0.5,
},
});
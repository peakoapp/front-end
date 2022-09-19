import { StyleSheet, Text } from "react-native"

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title

const styles = StyleSheet.create({
    title: {
      fontFamily: 'poppins-semibold',
      fontSize: 40,
      color: 'orange',
      textAlign: 'center',
    },
  });
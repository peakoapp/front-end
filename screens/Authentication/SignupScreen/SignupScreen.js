import { View, Text, StyleSheet } from "react-native";
import SignupForm from "./component/SignupForm";
export default function SignupScreen(){
    return (
            <View style={styles.rootContainer}>
                <View style={styles.formContainer}>
                <SignupForm/>
                </View>
            </View>

    )
}

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'orange'
    },
    formContainer:{
        flex:1,
        marginTop:100
    }
  });
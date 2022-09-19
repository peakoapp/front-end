import { View, Text, StyleSheet } from "react-native";
import SigninForm from "./component/SigninForm";
export default function SigninScreen(){
    return (
            <View style={styles.rootContainer}>
                <View style={styles.formContainer}>
                <SigninForm/>
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
import { View, Text, StyleSheet } from "react-native";

import { TextInput } from "react-native-gesture-handler";
import PressableBtn from "../../../../components/UIs/PressableBtn";
import { useNavigation } from "@react-navigation/native";
import Title from "../../components/Title";

export default function SignupForm({authCtx}) {
    const navigation = useNavigation();
    function navToSignIn(){
        navigation.navigate('Signin' )
      }
      


    return (
            <View style={styles.rootContainer}>
            <View><Title>Sign up</Title></View>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput} placeholder="Email"/>
                <TextInput style={styles.textInput} placeholder="Password"/>
                <TextInput style={styles.textInput} placeholder="Confirm Password"/>
                <TextInput style={styles.textInput} placeholder="Username"/>
            </View>
            <View style={styles.submitContianer}>
                {/* wrong way of auth? */}
                <View><PressableBtn onPress={() => authCtx.isAuthenticated = true}>Sign Up</PressableBtn></View>
                <View ><Text style={styles.text} onPress={navToSignIn}>Have an account?</Text></View>
            </View>
        </View>
        
  )
}

const styles = StyleSheet.create({
    rootContainer:{
        width:'80%',
        backgroundColor:'white',
        borderRadius:20,
        padding: 50,
        justifyContent:'space-between'
    },
    textInputContainer:{
        //TODO
    },
    textInput:{
        fontFamily:'poppins-italic',
        padding: 6,
        borderWidth: 0.5,
        borderColor:'grey',
        borderRadius: 15,
        margin:5
    },
    submitContianer:{
       marginTop: 20
    },
    text:{
        fontFamily:'poppins-light',
        textAlign:'center',
        color: 'orange',
    }
})
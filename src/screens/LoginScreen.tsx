import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomTextInput from '../components/CustomTextInput'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { hp } from '../theme/constant'

type Props = {
    navigation: NavigationProp<any>
}

const LoginScreen = (props: Props) => {
    const [email, setEmail] = useState<string>("")
    const [password, setpassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [isChangePassword, setIsChangePassword] = useState<boolean>(false)

    const navigation = useNavigation();
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setEmail("")
            setpassword("")
            setConfirmPassword("")
        });

        return unsubscribe;
    }, [navigation]);



    const onChangeText = (t: string) => {
        setEmail(t);
    }
    const onPressChange = () => {
        setEmail("")
        setpassword("")
        setConfirmPassword("")
        setIsChangePassword(!isChangePassword)
    }

    function onPressSubmit() {
        if (email !== "" || password !== "") {
            if (isChangePassword) {
                setEmail("")
                setpassword("")
                setIsChangePassword(false)
            } else {

                props.navigation.navigate("HomeScreen", { name: email })
            }
        } else {
            Alert.alert("Please enter email and password")
        }
    }

    return (
        <SafeAreaView style={styles.flex}>
            <View style={styles.viewMain}>
                <Text style={styles.textlogin}>{isChangePassword ? "Change Password" : "Login"}</Text>
                <CustomTextInput
                    value={email}
                    placeholder={"Username"}
                    onChangeText={(text: string) => onChangeText(text)}
                />
                <View style={styles.viewMarginTop}>
                    <CustomTextInput
                        value={password}
                        isPassword={true}
                        placeholder={"Password"}
                        onChangeText={(text: string) => setpassword(text)}
                    />
                </View>

                {isChangePassword && <View style={styles.viewMarginTop}>
                    <CustomTextInput
                        value={confirmPassword}
                        isPassword={true}
                        placeholder={"Confirm Password"}
                        onChangeText={(text: string) => setConfirmPassword(text)}
                    />
                </View>}
                <TouchableOpacity style={styles.button} onPress={onPressSubmit}>
                    <Text style={styles.text}>{"Submit"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.changePassword} onPress={onPressChange}>
                    <Text style={[styles.text, { color: "black" }]}>{isChangePassword ? "Back to Login" : "Change Password"}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center"
    },
    viewMain: {
        paddingHorizontal: 10,
        width: '100%'
    },
    viewMarginTop: {
        marginTop: 20
    },
    button: {
        height: hp(6),
        width: '90%',
        alignSelf: "center",
        backgroundColor: '#000',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    text: {
        color: "white"
    },
    textlogin: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 20
    },
    changePassword: {
        alignSelf: 'center',
        marginTop: 40
    }
})

export default LoginScreen
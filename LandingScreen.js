import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import Login from "./Login";
import SignUp from "./SignUp";

const LandingScreen = ({navigation}) => {
    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.img} source={require("./assets/foodmenu.png")} />
                <Text style={styles.title}>Welcome to our restaurant</Text>
                <View style={styles.hi}>
                <Text style={styles.title2}>
                    Oder food and make reservations with one click
                </Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.txt1}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.txt2}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: 120,
        height: 120,
        marginTop: 60,
    },
    title: {
        marginTop: 55,
        fontSize: 17,
        color: "#5EA33A",
        marginBottom: 30,
    },
    title2: {
        fontSize: 17,
        color: "#4A4A4A",
        textAlign: "center",
    },
    hi:{
        width:278,
        
    },
    button: {
        backgroundColor: "#5EA33A",
        width: 278,
        height: 53,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 25,
        marginTop: 55,
    },
    btn: {
        width: 278,
        height: 53,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "gray",
    },
    txt1: {
        color: "white",
        fontSize: 17,
    },
    txt2: {
        color: "#374B6D",
        fontSize: 17,
    },
});
export default LandingScreen;

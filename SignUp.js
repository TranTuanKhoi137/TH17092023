import React, { useState } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

const SignUp = () => {
    return (
        <View>
            <Text style={styles.title}>Create new account</Text>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Full Name" />
                <TextInput style={styles.input} placeholder="Phone Number" />
                <TextInput style={styles.input} placeholder="Email Address" />
                <TextInput style={styles.input} placeholder="Password" />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.txt}>Sign Up</Text>
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
    title: {
        marginTop: 130,
        fontSize: 20,
        textAlign: "left",
        color: "#5EA33A",
        marginLeft: 20,
    },
    input: {
        width: 323,
        height: 38,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 999,
        paddingLeft: 20,
        marginBottom: 24,
    },
    button: {
        backgroundColor: "#344D91",
        width: 278,
        height: 38,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 94,
    },
    txt: {
        color: "white",
    },
});

export default SignUp;

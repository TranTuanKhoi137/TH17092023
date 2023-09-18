import React, { useState } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
const Login = ({}) => {
    return (
        <View>
            <Text style={styles.title}>Sign In</Text>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Email or phone number" />
                <TextInput style={styles.input} placeholder="Password" />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.txt}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.txt2}>OR</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.txt}>Facebook Login</Text>
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
        height: 53,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 999,
        paddingLeft: 20,
        marginBottom: 24
    },
    button: {
        backgroundColor: "#5EA33A",
        width: 278,
        height: 53,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        backgroundColor: "#344D91",
        width: 278,
        height: 53,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
    },
    txt: {
        color: "white",
    },
    txt2: {
        marginTop: 50,
        color: "gray",
        marginBottom: 50,
    },
});

export default Login;

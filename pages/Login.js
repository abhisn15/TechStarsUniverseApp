import React, { useState } from "react";
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [inputError, setInputError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const emailUser = "abhisn@gmail.com";
    const passwordUser = "abhisn";

    const handleLoginSignUp = () => {
        navigation.navigate("SignUp");
    };

    const handleLogin = () => {
        // Reset error states
        setInputError(false);
        setPasswordError(false);

        // Check if the email and password fields are empty.
        if (!email || !password) {
            setInputError(true);
            return;
        }

        // Check if the email address is valid.
        if (!email.includes("@")) {
            setInputError(true);
            return;
        }

        // Check if the email and password match the stored user credentials.
        if (email !== emailUser || password !== passwordUser) {
            setInputError(true);
            setPasswordError(true);
            // emailInput.current.clear();
            // passwordInput.current.clear();
            // setEmail("");
            // setPassword("");
            // setInputError(false);
            // setPasswordError(false);
            return;
        }

        // Navigate to the Network screen.
        navigation.navigate("Home");
    };

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <StatusBar />
            {inputError && (
                <View
                    style={{
                        display: "flex",
                        alignItems: "flex-end",
                        gap: 10,
                        flex: 0,
                        width: 400,
                        backgroundColor: "red",
                        paddingTop: 70,
                        paddingBottom: 20,
                        paddingLeft: 22,
                        paddingRight: 20,
                    }}
                >
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <Text style={{ marginLeft: 20, color: "white", fontSize: 16 }}>
                            Oops, it seems you don’t fill up all of the required form! Please
                            fill up the required form and try again.
                        </Text>
                        <TouchableOpacity onPress={() => setInputError(false)}>
                            <Image
                                style={{ width: 24, height: 24 }}
                                source={require("../assets/close.png")}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            <View style={styles.container}>
                <Text style={styles.textTitle}>login with your techstars account</Text>
                <Text style={styles.secondText}>
                    welcome back to techstars Universe
                </Text>
                <View style={styles.form}>
                    <Text
                        style={{
                            width: 353,
                            marginBottom: 15,
                            borderWidth: 2,
                            borderTopColor: "#FFFFFB",
                            borderLeftColor: "#FFFFFB",
                            borderRightColor: "#FFFFFB",
                            borderBottomColor: "rgba(130, 152, 171, 0.30)",
                        }}
                    ></Text>
                    <SafeAreaView>
                        <Text style={styles.text}>
                            Email
                            <Text
                                style={
                                    (!inputError && !email) ||
                                        (email && !email.includes("@")) ||
                                        (!inputError === !email) === !inputError
                                        ? styles.errorInput
                                        : ""
                                }
                            >
                                *
                            </Text>
                        </Text>
                        <TextInput
                            style={[
                                styles.input,
                                (!inputError && !email) ||
                                    (email && !email.includes("@")) ||
                                    (!inputError === !email) === !inputError
                                    ? styles.errorInput
                                    : "",
                            ]}
                            value={email}
                            autoComplete="email"
                            onChangeText={(text) => setEmail(text)}
                        />

                        <Text
                            style={
                                (inputError === !email) === !inputError
                                    ? { display: "none", color: "red", marginBottom: 15 }
                                    : { display: "flex", color: "red", marginBottom: 15 }
                            }
                        >
                            This form can’t be empty!
                        </Text>
                        <Text style={styles.text}>
                            Password
                            <Text
                                style={
                                    inputError &&
                                        !password === !passwordUser &&
                                        password &&
                                        passwordUser
                                        ? styles.errorText
                                        : ""
                                }
                            >
                                *
                            </Text>
                        </Text>
                        <View
                            style={[
                                styles.passwordInput,
                                inputError &&
                                    !password === !passwordUser &&
                                    password &&
                                    passwordUser
                                    ? { display: "flex", borderBottomColor: "red" }
                                    : { borderBottomColor: "black" },
                            ]}
                        >
                            <TextInput
                                style={
                                    (!inputError && !email) === inputError
                                        ? { flex: 1, height: 40, color: "black" }
                                        : { flex: 1, height: 40, color: "red" }
                                }
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Image
                                    style={{ width: 24, height: 24 }}
                                    source={
                                        inputError &&
                                            !password === !passwordUser &&
                                            password &&
                                            passwordUser
                                            ? require("../assets/show-error.png")
                                            : require("../assets/show.png")
                                    }
                                ></Image>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: " center",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ color: "black", fontSize: 13 }}>
                                Forgot your password?
                            </Text>
                            <TouchableOpacity>
                                <Text
                                    style={{
                                        marginLeft: 5,
                                        color: "black",
                                        fontSize: 13,
                                        padding: 5,
                                        borderBottomWidth: 1,
                                        borderColor: "#39C463",
                                    }}
                                    onPress={handleLoginSignUp}
                                >
                                    Reset Password
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </View>
            </View>
            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    height: 150,
                    borderTopColor: "black", // Warna garis
                    borderTopWidth: 2,
                    gap: 20, // Lebar garis (dalam pixel)
                    flexShrink: 0,
                }}
            >
                <View style={styles.buttonALL}>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: "#39C463" }]}
                        onPress={handleLogin}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: " center",
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ color: "black", fontSize: 13 }}>
                            don’t have an account?
                        </Text>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    marginLeft: 5,
                                    color: "black",
                                    fontSize: 13,
                                    padding: 5,
                                    borderBottomWidth: 1,
                                    borderColor: "#39C463",
                                }}
                                onPress={handleLoginSignUp}
                            >
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 65,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 270,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 25,
    },
    textTitle: {
        fontSize: 36,
        fontFamily: "sans-serif",
        fontWeight: "bold",
    },
    secondText: {
        fontSize: 16,
    },
    form: {
        display: "flex",
        width: 353,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 8,
        marginBottom: 20,
    },
    text: {
        display: "flex",
        alignItems: "center",
        marginBottom: 8,
        color: "black", // Warna teks
    },
    errorText: {
        color: "red",
    },
    input: {
        display: "flex",
        padding: 13,
        width: Dimensions.get("screen").width > 360 ? 354 : 320,
        height: 40,
        borderWidth: 2,
        borderTopColor: "rgba(130, 152, 171, 0.50)",
        borderRightColor: "rgba(130, 152, 171, 0.50)",
        borderLeftColor: "rgba(130, 152, 171, 0.50)",
        alignSelf: "stretch",
        alignItems: "center",
        marginTop: 8,
        marginBottom: 15,
    },
    errorInput: {
        display: "flex",
        color: "red",
        padding: 13,
        width: Dimensions.get("screen").width > 360 ? 354 : 320,
        height: 40,
        borderWidth: 2,
        borderTopColor: "rgba(130, 152, 171, 0.50)",
        borderRightColor: "rgba(130, 152, 171, 0.50)",
        borderLeftColor: "rgba(130, 152, 171, 0.50)",
        borderBottomColor: "red",
        alignSelf: "stretch",
        alignItems: "center",
        marginTop: 8,
        marginBottom: 15,
    },
    border: {
        marginBottom: 15,
        marginTop: 8,
        borderWidth: 2,
        borderTopColor: "rgba(130, 152, 171, 0.50)",
        borderRightColor: "rgba(130, 152, 171, 0.50)",
        borderLeftColor: "rgba(130, 152, 171, 0.50)",
    },
    errorBorder: {
        borderBottomColor: "red",
    },
    passwordInput: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 13,
        width: Dimensions.get("screen").width > 360 ? 354 : 320,
        height: 40,
        borderWidth: 2,
        borderTopColor: "rgba(130, 152, 171, 0.50)",
        borderRightColor: "rgba(130, 152, 171, 0.50)",
        borderLeftColor: "rgba(130, 152, 171, 0.50)",
        alignSelf: "stretch",
        alignItems: "center",
        marginTop: 8,
        marginBottom: 15,
    },
    inputPick: {
        height: 0,
    },
    errorInputPick: {
        color: "red",
    },
    errorPickerItem: {
        color: "red",
    },
    buttonALL: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    button: {
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 10,
        paddingRight: 10,
        width: Dimensions.get("screen").width > 360 ? 354 : 320,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    textQuest: {
        marginBottom: 20,
    },
});
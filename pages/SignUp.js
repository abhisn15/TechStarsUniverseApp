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
import { Picker } from "@react-native-picker/picker";

export default function SignUp({ navigation }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [inputError, setInputError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("Select Role");
    const [passwordMatchError, setPasswordMatchError] = useState(false);


    const handleLoginAsGuest = () => {
        navigation.navigate("Login");
    };
    const handleCreateAccount = () => {
        // Cek apakah ada input yang belum diisi
        if (
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword ||
            selectedLanguage === "Select Role"
        ) {
            setInputError(true);
            setPasswordError(false);
            setPasswordMatchError(false); // Reset error kecocokan password
        } else if (password !== confirmPassword) {
            setInputError(false);
            setPasswordError(true);
            setPasswordMatchError(true); // Set error kecocokan password
        } else {
            setInputError(false);
            setPasswordError(false);
            setPasswordMatchError(false); // Reset error kecocokan password
            // Lakukan tindakan yang diperlukan saat tomb
            navigation.navigate("Login"); // Ganti 'Login' dengan nama stack/halaman login Andaol Create Account ditekan
        }
    };

    const toggleInputError = () => {
        setInputError(!inputError);
    };

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <StatusBar />
            <View
                style={
                    inputError &&
                        (!firstName ||
                            !lastName ||
                            !email ||
                            !password ||
                            !confirmPassword ||
                            selectedLanguage === "Select Role")
                        ? {
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
                        }
                        : { display: "none" }
                }
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 20,
                    }}
                >
                    <Text style={{ marginLeft: 20, color: "white", fontSize: 16 }}>
                        Oops, it seems you don’t fill up all of the required form! Please
                        fill up the required form and try again.
                    </Text>
                    <TouchableOpacity onPress={toggleInputError}>
                        <Image
                            style={{ width: 24, height: 24 }}
                            source={require("../assets/close.png")}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.textTitle}>
                    Join the 7,000+ founders who built their businesses with Techstars
                </Text>
                <Text style={styles.secondText}>
                    Thank you for your interest in applying to Techstars.
                </Text>
                <Text
                    style={{
                        width: 353,
                        borderWidth: 2,
                        borderTopColor: "#FFFFFB",
                        borderLeftColor: "#FFFFFB",
                        borderRightColor: "#FFFFFB",
                        borderBottomColor: "rgba(130, 152, 171, 0.30)",
                    }}
                ></Text>
                <View style={styles.form}>
                    <SafeAreaView>
                        <Text style={styles.text}>
                            First Name
                            <Text style={inputError && !firstName ? styles.errorText : ""}>
                                *
                            </Text>
                        </Text>
                        <TextInput
                            style={[
                                styles.input,
                                inputError && !firstName ? styles.errorInput : "",
                            ]}
                            value={firstName}
                            onChangeText={(text) => setFirstName(text)}
                        />
                        <Text style={styles.text}>
                            Last Name
                            <Text style={inputError && !lastName ? styles.errorText : ""}>
                                *
                            </Text>
                        </Text>
                        <TextInput
                            style={[
                                styles.input,
                                inputError && !lastName ? styles.errorInput : "",
                            ]}
                            value={lastName}
                            onChangeText={(text) => setLastName(text)}
                        />
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
                                    ? { display: "none" }
                                    : { display: "flex", color: "red", marginBottom: 15 }
                            }
                        >
                            This form can’t be empty!
                        </Text>
                        <Text style={styles.text}>
                            What Are You
                            <Text
                                style={
                                    inputError && selectedLanguage === "Select Role"
                                        ? styles.errorText
                                        : ""
                                }
                            >
                                *
                            </Text>
                        </Text>
                        <View
                            style={[
                                styles.border,
                                inputError && selectedLanguage === "Select Role"
                                    ? styles.errorBorder
                                    : "",
                            ]}
                        >
                            <Picker
                                style={[
                                    styles.inputPick,
                                    inputError && selectedLanguage === "Select Role"
                                        ? styles.errorInputPick
                                        : "",
                                ]}
                                mode="dropdown"
                                selectedValue={selectedLanguage}
                                itemStyle={{
                                    color: selectedLanguage === "Select Role" ? "red" : "black",
                                }}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedLanguage(itemValue)
                                }
                            >
                                <Picker.Item label="Select Role" value="Select Role" />
                                <Picker.Item label="Investor" value="Investor" />
                            </Picker>
                        </View>
                        <Text style={styles.text}>
                            Password
                            <Text
                                style={
                                    (inputError && !password) ||
                                        (confirmPassword && confirmPassword !== password)
                                        ? { color: "red" }
                                        : { color: "black" }
                                }
                            >
                                *
                            </Text>
                        </Text>

                        <View
                            style={[
                                styles.passwordInput,
                                (inputError && !password) ||
                                    (confirmPassword && confirmPassword !== password)
                                    ? { borderBottomColor: "red" }
                                    : { borderBottomColor: "black" },
                            ]}
                        >
                            <TextInput
                                style={{ flex: 1, height: 40 }}
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Image
                                    style={{ width: 24, height: 24 }}
                                    source={
                                        !showPassword ||
                                            ((confirmPassword || password) &&
                                                confirmPassword === password)
                                            ? require("../assets/show.png")
                                            : require("../assets/show-error.png")
                                    }
                                ></Image>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.text}>
                            Confirm Password
                            <Text
                                style={
                                    (confirmPassword || password) && confirmPassword !== password
                                        ? { color: "red" }
                                        : { color: "black" }
                                }
                            >
                                *
                            </Text>
                        </Text>
                        <View
                            style={[
                                styles.passwordInput,
                                (confirmPassword || password) && confirmPassword !== password
                                    ? { borderBottomColor: "red" }
                                    : { borderBottomColor: "black" },
                            ]}
                        >
                            <TextInput
                                style={{ flex: 1, height: 40 }}
                                secureTextEntry={!showConfirmPassword}
                                value={confirmPassword}
                                onChangeText={(text) => setConfirmPassword(text)}
                            />
                            <TouchableOpacity
                                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                <Image
                                    style={{ width: 24, height: 24 }}
                                    source={
                                        !showConfirmPassword ||
                                            ((confirmPassword || password) &&
                                                confirmPassword === password)
                                            ? require("../assets/show.png")
                                            : require("../assets/show-error.png")
                                    }
                                ></Image>
                            </TouchableOpacity>
                        </View>

                        <Text
                            style={[
                                styles.errorText,
                                (confirmPassword || password) && confirmPassword !== password
                                    ? { display: "flex" }
                                    : { display: "none" },
                            ]}
                        >
                            Password do not match!
                        </Text>
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
                        onPress={handleCreateAccount}
                    >
                        <Text style={styles.buttonText}>Create Account</Text>
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
                            Have An Account?
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
                                onPress={handleLoginAsGuest}
                            >
                                Login
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
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "white",
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
        width: "100%",
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
        width: Dimensions.get("screen").width > 370 ? 354 : 320,
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
        marginRight: Dimensions.get("screen").width > 360 ? 5 : 46,
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
        width: Dimensions.get("screen").width > 360 ? 350 : 320,
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
        width: Dimensions.get("screen").width > 360 ? 350 : 317
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
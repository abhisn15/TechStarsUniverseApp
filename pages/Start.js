import React from 'react'
import { Button, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Start({ navigation }) {
    const handleGetStarted = () => {
        navigation.navigate('SignUp')
    }
    const handleLoginAsGuest = () => {
        navigation.navigate('Login')
    }
    return (
        <ScrollView>
            <StatusBar />
            <View style={styles.container}>
                <Image style={{ width: '100%' }} source={require('../assets/header-screen.png')}></Image>
                <Text style={styles.title}>The Largest</Text>
                <Text style={styles.title2}>Startup Network</Text>
                <Text style={styles.title3}>In The World.</Text>
                <Text style={styles.tag}>#givefirst</Text>
                <View style={styles.buttonALL}>
                    <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonGuest} onPress={handleLoginAsGuest}>
                        <Text style={styles.buttonText}>Login As Guest</Text>
                    </TouchableOpacity>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: ' center', alignItems: 'center', }}>
                        <Text style={{ color: 'white', fontSize: 13, }}>
                            Have An Account?
                        </Text>
                        <TouchableOpacity>
                            <Text style={{
                                marginLeft: 5,
                                color: 'white',
                                fontSize: 13,
                                padding: 5,
                                borderBottomWidth: 1,
                                borderColor: '#39C463',
                            }} onPress={handleLoginAsGuest}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 1000,
        backgroundColor: 'black',
    },
    title: {
        position: 'relative',
        bottom: 70,
        left: 20,
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        lineHeight: 45,
        fontFamily: 'sans-serif',
        textTransform: 'capitalize',
    },
    title2: {
        position: 'relative',
        bottom: 70,
        left: 20,
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        lineHeight: 45,
        fontFamily: 'sans-serif',
        textTransform: 'capitalize',
    },
    title3: {
        position: 'relative',
        bottom: 70,
        left: 20,
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        lineHeight: 45,
        fontFamily: 'sans-serif',
        textTransform: 'capitalize',
    },
    tag: {
        position: 'relative',
        bottom: 70,
        left: 20,
        color: 'white',
        fontSize: 16,
        fontFamily: 'sans-serif',
    },
    buttonALL: {
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    button: {
        backgroundColor: '#39C463',
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 10,
        paddingRight: 10,
        width: 354,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonGuest: {
        backgroundColor: '#000000',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 10,
        paddingRight: 10,
        width: 354,
        borderRadius: 5,
    },
    textQuest: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontSize: 18,
    }
})

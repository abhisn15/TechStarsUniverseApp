import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import { Image, StyleSheet, Text } from 'react-native';
import Start from './pages/Start';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Network from './pages/Network';
import Discover from './pages/Discover';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile';

// Import komponen-komponen yang diperlukan di sini (Home, Transaksi, Pemberitahuan, Pengaturan)

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Home' options={{ headerShown: false }}>

          {() => (
            <Tab.Navigator>
              <Tab.Screen
                name="Network"
                component={Network}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ focused, color, size }) => (
                    <Image source={focused ? require("./assets/network-icon.png") : require("./assets/network-icon-gray.png")}></Image>
                  ),
                  tabBarLabel: ({ focused, color }) => (
                    <Text style={{ color: focused ? '#39C463' : 'gray' }}>Network</Text> // Mengganti warna teks saat terfokus atau tidak
                  ),
                }}
              />
              <Tab.Screen
                name="Discover"
                component={Discover}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ focused, color, size }) => (
                    <Image source={focused ? require("./assets/discover-icon.png") : require("./assets/discover-icon-gray.png")}></Image>
                  ),
                  tabBarLabel: ({ focused, color }) => (
                    <Text style={{ color: focused ? '#39C463' : 'gray' }}>Discover</Text> // Mengganti warna teks saat terfokus atau tidak
                  ),
                }}
              />
              <Tab.Screen
                name="Jobs"
                component={Jobs}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ focused, color, size }) => (
                    <Image source={focused ? require("./assets/jobs-icon.png") : require("./assets/jobs-icon-gray.png")}></Image>
                  ),
                  tabBarLabel: ({ focused, color }) => (
                    <Text style={{ color: focused ? '#39C463' : 'gray' }}>Jobs</Text> // Mengganti warna teks saat terfokus atau tidak
                  ),
                }}
              />
              <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ focused, color, size }) => (
                    <Image source={focused ? require("./assets/profile-icon.png") : require("./assets/profile-icon-gray.png")}></Image>
                  ),
                  tabBarLabel: ({ focused, color }) => (
                    <Text style={{ color: focused ? '#39C463' : 'gray' }}>Profile</Text> // Mengganti warna teks saat terfokus atau tidak
                  ),
                }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer >
  );
}

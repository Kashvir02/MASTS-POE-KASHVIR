


import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Props = { navigation?: any };

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (navigation && typeof navigation.replace === 'function') {
        navigation.replace('Home');
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient colors={["#F4B37D", "#EAA67E", "#E48F7D"]} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logoHex}>
            <Text style={styles.logoText}>C</Text>
          </View>
        </View>

        <Text style={styles.title}>Welcome To</Text>
        <Text style={styles.subtitle}>Christoffel Digital Menu</Text>
      </View>
    </LinearGradient>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  content: { alignItems: 'center', paddingHorizontal: 20 },
  logoContainer: { marginBottom: 40 },
  logoHex: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    transform: [{ rotate: '90deg' }],
  },
  logoText: { fontSize: 48, fontWeight: 'bold', color: '#000', transform: [{ rotate: '-90deg' }] },
  title: { fontSize: 28, color: '#fff', fontWeight: '600' },
  subtitle: { fontSize: 20, color: '#fff', fontWeight: '400' },
});


//Title : How too add linear gradiant background in react native
//Author: StackOverFlow
// Date Published: None
//Date accessesd: 22 October 2025
// Url : https://stackoverflow.com/questions/52039269/linear-gradient-background-color-in-react-native

//Title: How to add Icons in React native
//Author: StackOverFlow
//Date Published: None
//Date accessesd: 22 October 2025
//Url:https://stackoverflow.com/questions/34329715/how-to-add-icons-to-react-native-app
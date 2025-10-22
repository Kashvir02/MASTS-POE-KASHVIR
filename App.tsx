import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import WelcomeScreen from './WelcomeScreen';

const Stack = createStackNavigator<any>();
// Workaround: some versions of @react-navigation's types require an 'id' prop on Navigator.
// Use an `any` alias for rendering so we don't need to provide an explicit id.
const AnyStack: any = Stack;

export default function App() {
  return (
    <NavigationContainer>
  <AnyStack.Navigator initialRouteName="Welcome">
        <AnyStack.Screen name="Welcome" component={WelcomeScreen} />
        <AnyStack.Screen name="Home" component={HomeScreen} />
      </AnyStack.Navigator>
    </NavigationContainer>
  );
}

//Title : How to make a simple restaurant app with react native
//Author: 7 span
//Date Published: 24th July 2025
//Date accessesd:22 October 2025
//Url: https://7span.com/blog/food-delivery-app-in-react-native
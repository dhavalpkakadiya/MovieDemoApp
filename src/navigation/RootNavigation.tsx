import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import DetailsScreen from '../screens/DetailsScreen';

type Props = {}

type StackNavigatiorTypes = {
  LoginScreen: undefined
  HomeScreen: undefined
}

const Stack = createStackNavigator<StackNavigatiorTypes>();

const RootNavigation = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation



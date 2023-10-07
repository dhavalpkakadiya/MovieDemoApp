import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LandingScreen from '../screens/LandingScreen';

type Props = {};

type StackNavigatiorTypes = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  LandingScreen: undefined;
  DetailsScreen: undefined;
};

const Stack = createStackNavigator<StackNavigatiorTypes>();

const RootNavigation = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingScreen">
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

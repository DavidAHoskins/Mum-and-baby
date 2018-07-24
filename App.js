/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';

import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from "./screens/ThirdScreen";
import ContentScreen from "./screens/ContentScreen";


const Navigation = createStackNavigator({
    First:{screen:FirstScreen},
    Second:{screen:SecondScreen},
    Third:{screen:ThirdScreen},
    Content:{screen:ContentScreen}
},
  {
    initialRouteName: 'First',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#FA7E5B',
      },
      headerBackTitle: null,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });


export default Navigation;

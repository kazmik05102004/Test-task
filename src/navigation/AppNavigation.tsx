import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteDataType} from '@utils/types';
import {BottomTabNavigator} from './BottomTabNavigation';
import {Home} from 'src/pages/Home/Home';

export type RootStackParamList = {
  Home: undefined;
  BottomTab: {busInfo?: RouteDataType};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

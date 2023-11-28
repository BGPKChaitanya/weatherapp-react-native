import React from 'react';
import CurrentWeather from './src/Screens/CurrentWeather';
import UpcomingWeather from './src/Screens/UpcomingWeather';
import City from './src/Screens/City';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Current" component={CurrentWeather} />
        <BottomTab.Screen name="UpcomingWeather" component={UpcomingWeather} />
        <BottomTab.Screen name="City" component={City} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

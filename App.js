import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/Components/Tabs';
import Counter from './src/Demonstration/Counter';
import {GetWeather} from './src/Hooks/GetWeather';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

// const API_KEY = '4a67ecbac3d6c8e64745381681a078c';

export default function App() {
  const [loading, weather, Error] = GetWeather();
  console.log(loading, weather, Error);

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
      // <Counter />
    );
  }
  return (
    <View style={styles.constainer}>
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import {Icon} from '@rneui/themed';
import RowText from '../Components/RowText';
import {weatherType} from '../Utilities/WeatherType';

export default function CurrentWeather({weatherList}) {
  const {
    wrapper,
    container,
    ImageWrapper,
    tempSty,
    feelslike,
    highlowWrapper,
    highlow,
    bodyWrapper,
    description,
    message,
  } = styles;
  console.log(weatherList);
  const {
    main: {feels_like, temp_max, temp_min, temp},
    weather,
  } = weatherList;
  const weatherImage = weatherType[weather[0].main].backgroundImage;
  const weatherIcon = weatherType[weather[0].main].icon;
  const weatherMessage = weatherType[weather[0].main].message;

  return (
    <SafeAreaView style={wrapper}>
      <ImageBackground source={weatherImage} style={ImageWrapper}>
        <View style={container}>
          <Icon name={weatherIcon} type="feather" size={100} color="white" />
          <Text style={tempSty}>{Math.round(temp - 273.15)} °C</Text>
          <Text style={feelslike}>
            Feels like: {Math.round(feels_like - 273.15)} °C
          </Text>
          <RowText
            Wrapper={highlowWrapper}
            mOne={`H: ${Math.round(temp_max - 273.15)} °C`}
            mTwo={`L: ${Math.round(temp_min - 273.15)} °C`}
            mOneStyles={highlow}
            mTwoStyles={highlow}
          />
        </View>
        <RowText
          Wrapper={bodyWrapper}
          mOne={weather[0].description}
          mTwo={weatherMessage}
          mOneStyles={description}
          mTwoStyles={message}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  ImageWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempSty: {
    color: 'white',
    fontSize: 48,
  },
  feelslike: {
    color: 'white',
    fontSize: 30,
  },
  highlow: {
    color: 'white',
    fontSize: 20,
  },
  highlowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 200,
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    paddingLeft: 20,
    marginBottom: 40,
  },
  message: {
    fontSize: 20,
    color: 'white',
  },
  description: {
    fontSize: 48,
    color: 'white',
  },
});

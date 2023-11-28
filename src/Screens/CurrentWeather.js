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

export default function CurrentWeather() {
  const {
    wrapper,
    container,
    ImageWrapper,
    temp,
    feelslike,
    highlowWrapper,
    highlow,
    bodyWrapper,
    description,
    message,
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <ImageBackground
        source={require('../../assets/sky.jpg')}
        style={ImageWrapper}>
        <View style={container}>
          <Icon name="sun" type="feather" size={100} color="white" />
          <Text style={temp}>6</Text>
          <Text style={feelslike}>Feels Like: 5</Text>
          <RowText
            Wrapper={highlowWrapper}
            mOne={'High: 8'}
            mTwo={'Low: 6'}
            mOneStyles={highlow}
            mTwoStyles={highlow}
          />
        </View>
        <RowText
          Wrapper={bodyWrapper}
          mOne={'its Sunny'}
          mTwo={'A Perfect Day for T-Shirt wearing'}
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
  temp: {
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

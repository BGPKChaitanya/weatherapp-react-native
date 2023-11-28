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
import IconText from '../Components/IconText';

export default function City() {
  const {
    container,
    ImageLayout,
    cityName,
    countryName,
    cityText,
    population,
    populationWrapper,
    riserWrapper,
    riserText,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/yellow_city.jpg')}
        style={ImageLayout}>
        <Text style={[cityText, cityName]}>London</Text>
        <Text style={[cityText, countryName]}>UK</Text>
        <IconText
          iconName={'user'}
          iconColor={'white'}
          ViewText={'8000'}
          styleText={population}
          IconType={'feather'}
        />
        <View style={riserWrapper}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            ViewText={'06:58:10 AM'}
            styleText={riserText}
            IconType={'feather'}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            ViewText={'05:38:14 PM'}
            styleText={riserText}
            IconType={'feather'}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 500,
    color: 'white',
  },
  cityName: {
    fontSize: 50,
  },
  countryName: {
    fontSize: 40,
  },
  riserWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  population: {
    fontSize: 25,
    color: 'white',
  },
  riserText: {
    fontSize: 20,
    color: 'white',
  },
});

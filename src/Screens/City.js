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
import moment from 'moment';

export default function City({CityDetails}) {
  const {
    container,
    ImageLayout,
    cityName,
    countryName,
    cityText,
    popSty,
    populationWrapper,
    riserWrapper,
    riserText,
  } = styles;
  console.log('City Details: ', CityDetails);
  const {name, country, population, sunrise, sunset} = CityDetails;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city.jpg')}
        style={ImageLayout}>
        <Text style={[cityText, cityName]}>{name}</Text>
        <Text style={[cityText, countryName]}>{country}</Text>
        <IconText
          iconName={'user'}
          iconColor={'white'}
          ViewText={population}
          styleText={popSty}
          IconType={'feather'}
        />
        <View style={riserWrapper}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            ViewText={moment(sunrise).format('h:mm:ss a')}
            styleText={riserText}
            IconType={'feather'}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            ViewText={moment(sunset).format('h:mm:ss a')}
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
  popSty: {
    fontSize: 25,
    color: 'white',
  },
  riserText: {
    fontSize: 20,
    color: 'white',
  },
});

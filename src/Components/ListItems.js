import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {weatherType} from '../Utilities/WeatherType';
import moment from 'moment';

export default function ListItems(props) {
  const {dt_txt, min, max, condition} = props;
  const {item, date, temp, lowhigh} = styles;
  return (
    <View style={item}>
      <Icon
        name={weatherType[condition].icon}
        type="feather"
        size={50}
        color="white"
      />
      <View>
        <Text style={date}>
          Day : {moment(dt_txt).format('DD-MM-YYYY dddd')}
        </Text>
        <Text style={date}>Time : {moment(dt_txt).format('h:mm:ss a')}</Text>
        <View style={lowhigh}>
          <Text style={temp}>Low : {Math.round(min - 273.15)} °C</Text>
          <Text style={temp}>High : {Math.round(max - 273.15)} °C</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginHorizontal: 16,
    marginVertical: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#360712',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  temp: {
    color: 'white',
    fontSize: 15,
    marginRight: 10,
  },
  lowhigh: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ListItems(props) {
  const {dt_txt, min, max, condition} = props;
  const {item, date, temp} = styles;
  return (
    <View style={item}>
      <Icon name="sunny" size={50} color="white" />
      <View>
        <Text style={date}>Date : {dt_txt}</Text>
        <Text style={temp}>Low : {min}</Text>
        <Text style={temp}>High : {max}</Text>
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
  },
});

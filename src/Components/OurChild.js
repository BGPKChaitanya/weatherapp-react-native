import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function OurChild(props) {
  const {message} = props;
  return (
    <View style={{height: 200, width: 200, backgroundColor: 'red'}}>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

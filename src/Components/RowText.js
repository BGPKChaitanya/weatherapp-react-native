import {Text, View} from 'react-native';
import React from 'react';

export default function RowText(props) {
  const {Wrapper, mOneStyles, mTwoStyles, mOne, mTwo} = props;
  return (
    <View style={Wrapper}>
      <Text style={mOneStyles}>{mOne}</Text>
      <Text style={mTwoStyles}>{mTwo}</Text>
    </View>
  );
}

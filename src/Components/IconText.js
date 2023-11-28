import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';

export default function IconText(props) {
  const {iconName, iconColor, ViewText, styleText, IconType} = props;
  const {body, Wrapper} = styles;
  return (
    <View style={Wrapper}>
      <Icon name={iconName} type={IconType} size={50} color={iconColor} />
      <Text style={[body, styleText]}>{ViewText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  Wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
});

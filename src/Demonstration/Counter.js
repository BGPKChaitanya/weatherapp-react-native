import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';

export default function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log(`Count is modified as ${count}`);
    return () => {
      console.log('Cleanup UseEffect'); //works like componentWillUnmount
    };
  }, [count]);

  return (
    <View>
      <Text>`Count: {count}`</Text>
      <Button
        color={'red'}
        title={'Increase the count'}
        onPress={() => setCount(count + 1)}
      />
      <Button
        color={'green'}
        title={'Decrease the count'}
        onPress={() => setCount(count - 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

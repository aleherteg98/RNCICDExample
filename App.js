/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TextInput value="Alexandra" />
      <Text style={styles.text}>This is your app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'pink',
  },
});

export default App;

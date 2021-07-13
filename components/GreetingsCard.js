import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const GreetingsCard = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Hi! Welcome to your app ${name}! This is an example of CI/CD for React Native`}</Text>
      <TextInput
        placeholder="Enter your name..."
        onChangeText={value => setName(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    elevation: 10,
    width: '80%',
    height: '40%',
    shadowColor: 'black',
    shadowOffset: {
      width: 0.5,
      height: 4,
    },
    shadowOpacity: 0.5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default GreetingsCard;

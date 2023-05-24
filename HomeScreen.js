import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://assets-jane-cac1-16.janeapp.net/pub/W1siZiIsImRyYWdvbmZseS8yNjg0NC9pbWFnZS9waG90by8yMDIxLTEyLTAxLzAzMzUzMy8wMWEzMTBhNi1hN2MxLTQ1NWEtYjg2OC0xYjE2MjMxY2YyMWEvUGx1cyBVbHRyYSBqYW5lIGxvZ28gKDQpLnBuZyJdLFsicCIsInRodW1iIiwiNjAweDYwMD4iXV0?sha=5d15439ac6c35de7&for=plusultra.janeapp.com' }}
      />
      <Text style={styles.text}>Welcome to the Home Screen</Text>
      <Button title="Exercises" onPress={() => navigation.navigate('Exercises')} />
      <Button title="Daily Plan" onPress={() => navigation.navigate('Daily Plan')} />
      <Button title="Progress" onPress={() => navigation.navigate('Progress')} />
      <Button title="Live Chat" onPress={() => navigation.navigate('Live Chat')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    flex: 1/2,
    width: '90%',
    resizeMode: 'contain',
  },
});

export default HomeScreen;
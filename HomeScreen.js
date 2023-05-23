import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen</Text>
      <Button title="Exercises" onPress={() => navigation.navigate('Exercises')} />
      <Button title="Daily Plan" onPress={() => navigation.navigate('Daily Plan')} />
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
});

export default HomeScreen;
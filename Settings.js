import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <Button 
        title="Update Profile Information" 
        onPress={() => navigation.navigate('ProfileInformation')} 
      />
      <Button 
        title="Notification Settings" 
        onPress={() => navigation.navigate('NotificationSettings')} 
      />
      <Button 
        title="Deactivate Account" 
        onPress={() => navigation.navigate('DeactivateAccount')} 
      />
      <Button 
        title="Delete Personal Data" 
        onPress={() => navigation.navigate('DeletePersonalData')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default SettingsScreen;

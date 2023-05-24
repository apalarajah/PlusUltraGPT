import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart, Grid, YAxis, XAxis } from 'react-native-svg-charts';
import { Picker } from '@react-native-picker/picker';

// Sample data for two exercises
const data = {
  'Push-ups': [15, 18, 20, 22, 22, 24, 25, 26],
  'Pull-ups': [5, 7, 9, 10, 10, 11, 12, 13],
  'Squats': [13, 7, 9, 10, 10, 11, 12, 13],
};

// Fake dates for the last 8 days
const dates = ["May 1", "May 2", "May 3", "May 4", "May 5", "May 6", "May 7", "May 8"];

const ProgressScreen = () => {
  const [selectedExercise, setSelectedExercise] = useState('Push-ups');

  const exerciseData = data[selectedExercise];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Exercise Progress</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedExercise}
          style={styles.picker}
          onValueChange={(itemValue) =>
            setSelectedExercise(itemValue)
          }
        >
          {Object.keys(data).map((exercise, index) => (
            <Picker.Item key={index} label={exercise} value={exercise} />
          ))}
        </Picker>
      </View>

      <View style={styles.chartContainer}>
        <YAxis
          data={exerciseData}
          contentInset={{ top: 20, bottom: 20 }}
        />
        <BarChart
          style={styles.chart}
          data={exerciseData}
          gridMin={0}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </BarChart>
        <XAxis
          style={{ marginTop: 10 }}
          data={exerciseData}
          formatLabel={(value, index) => dates[index]}
          contentInset={{ left: 10, right: 10 }}
          svg={{ fontSize: 10, fill: 'black', rotation: 45, originY: 15, y: 10 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  pickerContainer: {
    marginBottom: 20,
    height: 50,
    justifyContent: 'center',
    padding: 10, // uniform padding around all sides
  },
  picker: {
    height: 50,
    width: '100%',
  },
  chartContainer: {
    marginTop: 125,
    height: 300,
    flexDirection: 'row',
    padding: 10, // uniform padding around all sides
  },
  chart: {
    flex: 1,
    marginLeft: 16,
  },
});

export default ProgressScreen;
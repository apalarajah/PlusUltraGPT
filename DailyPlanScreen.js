import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, Alert, TextInput } from 'react-native';

const exercises = [
  {
    id: 1,
    name: 'Push-ups',
    description: 'A classic upper body exercise',
    reps: 10,
    sets: 3,
    thumbnail: 'https://media.istockphoto.com/id/882882258/vector/the-active-afroamerican-young-man-is-doing-the-push-up-exercise.jpg?s=612x612&w=0&k=20&c=ZTtDlmbdj47jbCW6KPzT_OLWmnvX98CV5dtJvusLjWk=',
  },
  {
    id: 2,
    name: 'Pull-ups',
    description: 'Another classic upper body exercise',
    reps: 10,
    sets: 3,
    thumbnail: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/11/pull-up-variations.jpg',
  },
  // add more exercises here...
];

const DailyPlanScreen = () => {
  const [completedExercises, setCompletedExercises] = useState([]);
  const [repsData, setRepsData] = useState(exercises.map(exercise => ({id: exercise.id, sets: new Array(exercise.sets).fill('')})));

  const handlePress = (id) => {
    if (completedExercises.includes(id)) {
      setCompletedExercises(completedExercises.filter(exerciseId => exerciseId !== id));
    } else {
      setCompletedExercises([...completedExercises, id]);
    }
  };

  const handleRepsChange = (id, setIndex, newReps) => {
    setRepsData(repsData.map(item => item.id === id ? {...item, sets: item.sets.map((set, index) => index === setIndex ? newReps : set)} : item));
  };

  useEffect(() => {
    if (completedExercises.length === exercises.length) {
      Alert.alert('Congratulations!', 'You have completed all exercises.');
    }
  }, [completedExercises]);

  return (
    <View style={styles.container}>
      {exercises.map((exercise, index) => (
        <View key={exercise.id} style={styles.exerciseCard}>
          <Image source={{ uri: exercise.thumbnail }} style={styles.thumbnail} />
          <Text style={styles.exerciseName}>{exercise.name}</Text>
          <Text style={styles.exerciseDescription}>{exercise.description}</Text>
          {new Array(exercise.sets).fill(null).map((_, setIndex) => (
            <TextInput
              key={setIndex}
              style={styles.input}
              onChangeText={text => handleRepsChange(exercise.id, setIndex, text)}
              value={repsData[index].sets[setIndex]}
              editable={!completedExercises.includes(exercise.id)}
              keyboardType='numeric'
            />
          ))}
          <Text style={styles.exerciseReps}>{exercise.reps} reps x {exercise.sets} sets</Text>
          <Button
            title={completedExercises.includes(exercise.id) ? 'Completed' : 'Mark as Complete'}
            onPress={() => handlePress(exercise.id)}
            color={completedExercises.includes(exercise.id) ? 'green' : '#007BFF'}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  exerciseCard: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    padding: 16,
    alignItems: 'center',
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  exerciseDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  exerciseReps: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    width: 50,
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default DailyPlanScreen;
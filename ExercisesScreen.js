import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const exercises = [
    {
      id: 1,
      name: 'Push-ups',
      description: 'A classic upper body exercise',
      reps: '10 reps x 3 sets',
      thumbnail: 'https://media.istockphoto.com/id/882882258/vector/the-active-afroamerican-young-man-is-doing-the-push-up-exercise.jpg?s=612x612&w=0&k=20&c=ZTtDlmbdj47jbCW6KPzT_OLWmnvX98CV5dtJvusLjWk=',
    },
    {
      id: 2,
      name: 'Pull-ups',
      description: 'Another classic upper body exercise',
      reps: '10 reps x 3 sets',
      thumbnail: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/11/pull-up-variations.jpg',
    },
    {
      id: 3,
      name: 'Squats',
      description: 'Get them quads pumping',
      reps: '10 reps x 3 sets',
      thumbnail: 'https://weighttraining.guide/wp-content/uploads/2018/07/Bodyweight-squat-resized.png',
    },
    // add more exercises here...
  ];
const ExerciseScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredExercises, setFilteredExercises] = useState(exercises);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = exercises.filter(exercise =>
      exercise.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredExercises(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        value={search}
        onChangeText={handleSearch}
        placeholder="Search"
      />
      <FlatList
        data={filteredExercises}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.exerciseCard}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <Text style={styles.exerciseName}>{item.name}</Text>
            <Text style={styles.exerciseDescription}>{item.description}</Text>
            <Text style={styles.exerciseReps}>{item.reps}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 8,
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
});

export default ExerciseScreen;
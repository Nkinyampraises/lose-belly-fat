import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWorkout } from "../hooks/useWorkout";
import WorkoutCard from "../components/WorkoutCard";
import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import { formatDuration } from "../utils/formatTime";

export default function HomeScreen() {
  const {
    loading,
    error,
    progress,
    getCurrentWorkout,
    isExerciseCompleted,
    completeExercise,
    moveToNextDay,
    getCompletionPercentage,
  } = useWorkout();

  const workout = getCurrentWorkout();

  if (loading) {
    return (
      <View style={styles.centered}>
        <Text>Loading your workout...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  if (!workout) {
    return (
      <View style={styles.centered}>
        <Text>No workout found for today</Text>
      </View>
    );
  }

  const allExercisesCompleted = workout.exercises?.every((_, index) =>
    isExerciseCompleted(`${progress.currentDay}-${index}`)
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>
            {workout.isRestDay ? "Rest Day" : `Day ${progress.currentDay}`}
          </Text>
          <Text style={styles.subtitle}>
            {workout.isRestDay
              ? "Take it easy and recover"
              : `${workout.totalDuration} minutes workout`}
          </Text>
        </View>

        <View style={styles.progressSection}>
          <ProgressBar
            currentDay={progress.currentDay}
            totalDays={30}
            completionPercentage={getCompletionPercentage()}
          />
        </View>

        {workout.isRestDay ? (
          <View style={styles.restDay}>
            <Text style={styles.restDayText}>
              Rest days are important for recovery. Take this time to stretch and prepare for tomorrow's workout!
            </Text>
            <Button
              title="Start Next Day"
              onPress={moveToNextDay}
              style={styles.button}
            />
          </View>
        ) : (
          <View style={styles.workoutContainer}>
            <Text style={styles.sectionTitle}>Today's Exercises</Text>
            {workout.exercises?.map((exercise, index) => (
              <WorkoutCard
                key={`${progress.currentDay}-${index}`}
                exercise={exercise}
                index={index}
                isCompleted={isExerciseCompleted(`${progress.currentDay}-${index}`)}
                onComplete={() => completeExercise(`${progress.currentDay}-${index}`)}
              />
            ))}

            {allExercisesCompleted && (
              <View style={styles.completionSection}>
                <Text style={styles.completionText}>
                  Great job! You've completed today's workout!
                </Text>
                <Button
                  title="Move to Next Day"
                  onPress={moveToNextDay}
                  style={styles.button}
                />
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  progressSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  workoutContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  restDay: {
    padding: 20,
    alignItems: "center",
  },
  restDayText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  completionSection: {
    marginTop: 20,
    alignItems: "center",
  },
  completionText: {
    fontSize: 16,
    color: "#4CAF50",
    marginBottom: 16,
    textAlign: "center",
  },
  button: {
    width: "100%",
    marginTop: 10,
  },
  error: {
    color: "red",
    textAlign: "center",
  },
}); 
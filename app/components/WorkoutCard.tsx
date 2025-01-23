import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Exercise } from "../types/workout";
import { formatDuration } from "../utils/formatTime";

type WorkoutCardProps = {
  exercise: Exercise;
  index: number;
  isCompleted: boolean;
  onComplete: () => void;
};

export default function WorkoutCard({ 
  exercise, 
  index, 
  isCompleted, 
  onComplete 
}: WorkoutCardProps) {
  const { name, duration, reps, sets } = exercise;

  return (
    <Pressable
      style={[styles.card, isCompleted && styles.completedCard]}
      onPress={onComplete}
    >
      <View style={styles.content}>
        <View style={styles.exerciseInfo}>
          <Text style={styles.exerciseName}>{name}</Text>
          <Text style={styles.exerciseDetails}>
            {duration
              ? formatDuration(duration)
              : `${sets} sets of ${reps} reps`}
          </Text>
        </View>
        
        <View style={[styles.status, isCompleted && styles.completed]}>
          {isCompleted ? (
            <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
          ) : (
            <Ionicons name="ellipse-outline" size={24} color="#666" />
          )}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  completedCard: {
    opacity: 0.8,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  exerciseDetails: {
    fontSize: 14,
    color: "#666",
  },
  status: {
    marginLeft: 12,
  },
  completed: {
    opacity: 1,
  },
}); 
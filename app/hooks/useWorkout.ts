import { useState, useEffect } from "react";
import { getWorkoutForDay, workoutPlan } from "../data/workoutPlan";
import { WorkoutProgress } from "../types/workout";
import { STORAGE_KEYS, loadData, saveData } from "../utils/storage";

export function useWorkout() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<WorkoutProgress>({
    currentDay: 1,
    completedExercises: {},
  });

  // Get the current user's progress
  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const savedProgress = await loadData<WorkoutProgress>(STORAGE_KEYS.WORKOUT_PROGRESS);
      if (savedProgress) {
        setProgress(savedProgress);
      }
    } catch (err) {
      setError("Failed to load progress");
    } finally {
      setLoading(false);
    }
  };

  const getCurrentWorkout = () => {
    return getWorkoutForDay(progress.currentDay);
  };

  const isExerciseCompleted = (exerciseId: string) => {
    return !!progress.completedExercises[exerciseId];
  };

  const completeExercise = async (exerciseId: string) => {
    try {
      const updatedProgress = {
        ...progress,
        completedExercises: {
          ...progress.completedExercises,
          [exerciseId]: true,
        },
      };
      await saveData(STORAGE_KEYS.WORKOUT_PROGRESS, updatedProgress);
      setProgress(updatedProgress);
    } catch (err) {
      setError("Failed to update progress");
    }
  };

  const moveToNextDay = async () => {
    try {
      const nextDay = progress.currentDay + 1;
      if (nextDay > workoutPlan.length) return;

      const updatedProgress = {
        ...progress,
        currentDay: nextDay,
        completedExercises: {},
      };
      await saveData(STORAGE_KEYS.WORKOUT_PROGRESS, updatedProgress);
      setProgress(updatedProgress);
    } catch (err) {
      setError("Failed to update day");
    }
  };

  const getCompletionPercentage = () => {
    const workout = getCurrentWorkout();
    if (!workout || workout.isRestDay || !workout.exercises) return 0;

    const totalExercises = workout.exercises.length;
    const completedCount = workout.exercises.filter((_, index) =>
      isExerciseCompleted(`${progress.currentDay}-${index}`)
    ).length;

    return (completedCount / totalExercises) * 100;
  };

  return {
    loading,
    error,
    progress,
    getCurrentWorkout,
    isExerciseCompleted,
    completeExercise,
    moveToNextDay,
    getCompletionPercentage,
  };
} 
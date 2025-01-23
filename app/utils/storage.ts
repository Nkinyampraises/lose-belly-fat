import AsyncStorage from '@react-native-async-storage/async-storage';
import { WorkoutProgress } from '../types/workout';

export const STORAGE_KEYS = {
  WORKOUT_PROGRESS: 'workout_progress',
  USER_SETTINGS: 'user_settings',
  LAST_WORKOUT_DATE: 'last_workout_date',
} as const;

// Generic storage functions
export async function saveData(key: string, value: any): Promise<void> {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error saving data:', error);
    throw error;
  }
}

export async function loadData<T>(key: string): Promise<T | null> {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error loading data:', error);
    throw error;
  }
}

export async function removeData(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data:', error);
    throw error;
  }
}

// Workout specific storage functions
export async function saveWorkoutProgress(progress: WorkoutProgress): Promise<void> {
  await saveData(STORAGE_KEYS.WORKOUT_PROGRESS, progress);
}

export async function loadWorkoutProgress(): Promise<WorkoutProgress | null> {
  return loadData<WorkoutProgress>(STORAGE_KEYS.WORKOUT_PROGRESS);
}

export async function updateLastWorkoutDate(): Promise<void> {
  await saveData(STORAGE_KEYS.LAST_WORKOUT_DATE, new Date().toISOString());
}

export async function getLastWorkoutDate(): Promise<Date | null> {
  const dateStr = await loadData<string>(STORAGE_KEYS.LAST_WORKOUT_DATE);
  return dateStr ? new Date(dateStr) : null;
}

export async function resetProgress(): Promise<void> {
  const initialProgress: WorkoutProgress = {
    currentDay: 1,
    completedExercises: {},
  };
  await saveWorkoutProgress(initialProgress);
  await removeData(STORAGE_KEYS.LAST_WORKOUT_DATE);
}

// Helper function to check if it's a new day
export async function checkAndUpdateDay(): Promise<boolean> {
  const lastWorkoutDate = await getLastWorkoutDate();
  if (!lastWorkoutDate) return false;

  const today = new Date();
  const isNewDay = 
    today.getDate() !== lastWorkoutDate.getDate() ||
    today.getMonth() !== lastWorkoutDate.getMonth() ||
    today.getFullYear() !== lastWorkoutDate.getFullYear();

  return isNewDay;
} 
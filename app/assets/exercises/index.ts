export const exerciseNames = [
  // Cardio exercises
  "High Knees",
  "Jumping Jacks",
  "Mountain Climbers",
  "Marching in Place",
  "Burpees",

  // Strength exercises
  "Push-ups",
  "Wall Push-ups",
  "Incline Push-ups",
  "Knee Push-ups",

  // Core exercises
  "Plank Hold",
  "Bird Dog",
  "Russian Twist",
  "Bicycle Crunches",
  "Flutter Kicks",
  "Dead Bug",
  "Superman Hold",
  "Standing Core Rotations",

  // Lower body exercises
  "Glute Bridges",
] as const;

export type ExerciseName = typeof exerciseNames[number];

// Helper function to validate exercise name
export const isValidExercise = (name: string): name is ExerciseName => {
  return exerciseNames.includes(name as ExerciseName);
}; 
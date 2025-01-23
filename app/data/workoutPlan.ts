import { WorkoutDay } from "../types/workout";

type Exercise = {
  name: string;
  duration?: number; // in seconds
  reps?: number;
  sets?: number;
  restTime: number; // in seconds
};

export const workoutPlan: WorkoutDay[] = [
  {
    day: 1,
    isRestDay: false,
    totalDuration: 5,
    exercises: [
      {
        name: "Marching in Place",
        duration: 30,
        restTime: 30,
      },
      {
        name: "Wall Push-ups",
        reps: 5,
        duration: 30,
        restTime: 45,
      },
      {
        name: "Standing Core Rotations",
        reps: 10,
        duration: 30,
        restTime: 30,
      },
    ],
  },
  {
    day: 2,
    isRestDay: false,
    totalDuration: 6,
    exercises: [
      {
        name: "High Knee Marching",
        duration: 40,
        restTime: 30,
      },
      {
        name: "Incline Push-ups",
        reps: 6,
        duration: 40,
        restTime: 45,
      },
      {
        name: "Bird Dog Hold",
        duration: 40, // 15 seconds each side
        restTime: 30,
      },
    ],
  },
  {
    day: 3,
    isRestDay: true,
  },
  {
    day: 4,
    isRestDay: false,
    totalDuration: 6,
    exercises: [
      {
        name: "Jumping Jacks",
        reps: 20,
        duration: 40,
        restTime: 30,
      },
      {
        name: "Glute Bridges",
        reps: 10,
        duration: 40,
        restTime: 45,
      },
      {
        name: "Plank Hold",
        duration: 15,
        restTime: 30,
      },
    ],
  },
  {
    day: 5,
    isRestDay: false,
    totalDuration: 7,
    exercises: [
      {
        name: "Step-Touches",
        duration: 40,
        restTime: 30,
      },
      {
        name: "Knee Push-ups",
        reps: 8,
        duration: 45,
        restTime: 45,
      },
      {
        name: "Superman Hold",
        duration: 20,
        restTime: 30,
      },
    ],
  },
  {
    day: 6,
    isRestDay: true,
  },
  {
    day: 7,
    isRestDay: false,
    totalDuration: 7,
    exercises: [
      {
        name: "March and Punch",
        duration: 45,
        restTime: 30,
      },
      {
        name: "Wall Push-ups",
        reps: 12,
        duration: 45,
        restTime: 45,
      },
      {
        name: "Dead Bug",
        duration: 20,
        restTime: 30,
      },
    ],
  },
  {
    day: 8,
    isRestDay: false,
    totalDuration: 8,
    exercises: [
      {
        name: "Jumping Jacks",
        reps: 30,
        duration: 45,
        restTime: 25,
      },
      {
        name: "Knee Push-ups",
        reps: 10,
        duration: 45,
        restTime: 40,
      },
      {
        name: "Plank Hold",
        duration: 20,
        restTime: 25,
      },
      {
        name: "Mountain Climbers",
        duration: 30,
        restTime: 30,
      },
    ],
  },
  {
    day: 9,
    isRestDay: false,
    totalDuration: 8,
    exercises: [
      {
        name: "High Knees",
        duration: 45,
        restTime: 25,
      },
      {
        name: "Glute Bridges",
        reps: 15,
        duration: 45,
        restTime: 30,
      },
      {
        name: "Bird Dog",
        duration: 50, // 20 seconds each side
        restTime: 30,
      },
    ],
  },
  {
    day: 10,
    isRestDay: true,
  },
  {
    day: 11,
    isRestDay: false,
    totalDuration: 9,
    exercises: [
      {
        name: "Burpees without Jump",
        reps: 8,
        duration: 45,
        restTime: 30,
      },
      {
        name: "Incline Push-ups",
        reps: 12,
        duration: 45,
        restTime: 40,
      },
      {
        name: "Plank to Downward Dog",
        reps: 8,
        duration: 45,
        restTime: 30,
      },
    ],
  },
  {
    day: 12,
    isRestDay: false,
    totalDuration: 9,
    exercises: [
      {
        name: "Mountain Climbers",
        duration: 40,
        restTime: 25,
      },
      {
        name: "Superman Hold",
        duration: 25,
        restTime: 30,
      },
      {
        name: "Knee Push-ups",
        reps: 12,
        duration: 45,
        restTime: 35,
      },
      {
        name: "Russian Twist",
        duration: 30,
        restTime: 30,
      },
    ],
  },
  {
    day: 13,
    isRestDay: true,
  },
  {
    day: 14,
    isRestDay: false,
    totalDuration: 10,
    exercises: [
      {
        name: "High Knees",
        duration: 45,
        restTime: 25,
      },
      {
        name: "Push-ups",
        reps: 10,
        duration: 45,
        restTime: 35,
      },
      {
        name: "Plank Hold",
        duration: 30,
        restTime: 25,
      },
      {
        name: "Mountain Climbers",
        duration: 35,
        restTime: 30,
      },
    ],
  },
  {
    day: 15,
    isRestDay: false,
    totalDuration: 10,
    exercises: [
      {
        name: "Burpees",
        reps: 10,
        duration: 50,
        restTime: 25,
      },
      {
        name: "Push-ups",
        reps: 12,
        duration: 45,
        restTime: 35,
      },
      {
        name: "Flutter Kicks",
        duration: 30,
        restTime: 25,
      },
      {
        name: "Plank Hold",
        duration: 35,
        restTime: 25,
      },
    ],
  },
  {
    day: 16,
    isRestDay: false,
    totalDuration: 11,
    exercises: [
      {
        name: "Jumping Jacks",
        reps: 40,
        duration: 50,
        restTime: 25,
      },
      {
        name: "Mountain Climbers",
        duration: 45,
        restTime: 30,
      },
      {
        name: "Push-ups",
        reps: 12,
        duration: 45,
        restTime: 35,
      },
      {
        name: "Russian Twist",
        duration: 40,
        restTime: 25,
      },
    ],
  },
  {
    day: 17,
    isRestDay: true,
  },
  {
    day: 18,
    isRestDay: false,
    totalDuration: 11,
    exercises: [
      {
        name: "High Knees",
        duration: 50,
        restTime: 25,
      },
      {
        name: "Push-ups",
        reps: 15,
        duration: 50,
        restTime: 35,
      },
      {
        name: "Plank to Downward Dog",
        reps: 12,
        duration: 50,
        restTime: 30,
      },
      {
        name: "Bicycle Crunches",
        duration: 40,
        restTime: 25,
      },
    ],
  },
  {
    day: 19,
    isRestDay: false,
    totalDuration: 12,
    exercises: [
      {
        name: "Burpees",
        reps: 12,
        duration: 55,
        restTime: 25,
      },
      {
        name: "Push-ups",
        reps: 15,
        duration: 50,
        restTime: 35,
      },
      {
        name: "Mountain Climbers",
        duration: 45,
        restTime: 25,
      },
      {
        name: "Plank Hold",
        duration: 40,
        restTime: 25,
      },
    ],
  },
  {
    day: 20,
    isRestDay: true,
  },
  {
    day: 21,
    isRestDay: false,
    totalDuration: 12,
    exercises: [
      {
        name: "High Knees",
        duration: 50,
        restTime: 20,
      },
      {
        name: "Push-ups",
        reps: 15,
        duration: 50,
        restTime: 30,
      },
      {
        name: "Flutter Kicks",
        duration: 45,
        restTime: 20,
      },
      {
        name: "Russian Twist",
        duration: 45,
        restTime: 20,
      },
    ],
  },
  {
    day: 22,
    isRestDay: false,
    totalDuration: 13,
    exercises: [
      {
        name: "Burpees",
        reps: 15,
        duration: 60,
        restTime: 20,
      },
      {
        name: "Push-ups",
        reps: 18,
        duration: 55,
        restTime: 30,
      },
      {
        name: "Mountain Climbers",
        duration: 50,
        restTime: 20,
      },
      {
        name: "Plank Hold",
        duration: 45,
        restTime: 20,
      },
    ],
  },
  {
    day: 23,
    isRestDay: false,
    totalDuration: 13,
    exercises: [
      {
        name: "Jumping Jacks",
        reps: 50,
        duration: 60,
        restTime: 20,
      },
      {
        name: "Push-ups",
        reps: 20,
        duration: 60,
        restTime: 30,
      },
      {
        name: "Bicycle Crunches",
        duration: 50,
        restTime: 20,
      },
      {
        name: "Russian Twist",
        duration: 50,
        restTime: 20,
      },
    ],
  },
  {
    day: 24,
    isRestDay: true,
  },
  {
    day: 25,
    isRestDay: false,
    totalDuration: 14,
    exercises: [
      {
        name: "High Knees",
        duration: 60,
        restTime: 20,
      },
      {
        name: "Push-ups",
        reps: 20,
        duration: 60,
        restTime: 25,
      },
      {
        name: "Mountain Climbers",
        duration: 55,
        restTime: 20,
      },
      {
        name: "Plank Hold",
        duration: 50,
        restTime: 20,
      },
    ],
  },
  {
    day: 26,
    isRestDay: false,
    totalDuration: 14,
    exercises: [
      {
        name: "Burpees",
        reps: 18,
        duration: 65,
        restTime: 20,
      },
      {
        name: "Push-ups",
        reps: 20,
        duration: 60,
        restTime: 25,
      },
      {
        name: "Flutter Kicks",
        duration: 55,
        restTime: 20,
      },
      {
        name: "Russian Twist",
        duration: 55,
        restTime: 20,
      },
    ],
  },
  {
    day: 27,
    isRestDay: true,
  },
  {
    day: 28,
    isRestDay: false,
    totalDuration: 15,
    exercises: [
      {
        name: "High Knees",
        duration: 60,
        restTime: 15,
      },
      {
        name: "Push-ups",
        reps: 25,
        duration: 65,
        restTime: 25,
      },
      {
        name: "Mountain Climbers",
        duration: 60,
        restTime: 15,
      },
      {
        name: "Plank Hold",
        duration: 60,
        restTime: 15,
      },
    ],
  },
  {
    day: 29,
    isRestDay: false,
    totalDuration: 15,
    exercises: [
      {
        name: "Burpees",
        reps: 20,
        duration: 65,
        restTime: 15,
      },
      {
        name: "Push-ups",
        reps: 25,
        duration: 65,
        restTime: 20,
      },
      {
        name: "Bicycle Crunches",
        duration: 60,
        restTime: 15,
      },
      {
        name: "Russian Twist",
        duration: 60,
        restTime: 15,
      },
    ],
  },
  {
    day: 30,
    isRestDay: false,
    totalDuration: 15,
    exercises: [
      {
        name: "High Knees",
        duration: 60,
        restTime: 15,
      },
      {
        name: "Push-ups",
        reps: 25,
        duration: 65,
        restTime: 20,
      },
      {
        name: "Mountain Climbers",
        duration: 60,
        restTime: 15,
      },
      {
        name: "Plank Hold",
        duration: 60,
        restTime: 0, // Last exercise of the program
      },
    ],
  },
];

// Helper functions
export const getWorkoutForDay = (day: number): WorkoutDay | undefined => {
  return workoutPlan.find(workout => workout.day === day);
};

export const getTotalWorkoutDays = (): number => {
  return workoutPlan.filter(day => !day.isRestDay).length;
};

export const isRestDay = (day: number): boolean => {
  const workout = getWorkoutForDay(day);
  return workout?.isRestDay ?? false;
}; 
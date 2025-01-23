export type Exercise = {
  name: string;
  duration?: number;
  reps?: number;
  sets?: number;
  restTime: number;
};

export type WorkoutDay = {
  day: number;
  isRestDay: boolean;
  totalDuration?: number;
  exercises?: Exercise[];
};

export type WorkoutProgress = {
  currentDay: number;
  completedExercises: {
    [key: string]: boolean;
  };
}; 
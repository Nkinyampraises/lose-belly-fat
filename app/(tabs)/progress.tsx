import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWorkout } from "../hooks/useWorkout";
import ProgressBar from "../components/ProgressBar";
import { workoutPlan } from "../data/workoutPlan";

const DAYS_IN_PROGRAM = 30;
const SCREEN_WIDTH = Dimensions.get('window').width;
const CALENDAR_ITEM_SIZE = (SCREEN_WIDTH - 60) / 7; // 7 days per row, 60px total padding

export default function ProgressScreen() {
  const {
    loading,
    error,
    progress,
    isExerciseCompleted,
    getCompletionPercentage,
  } = useWorkout();

  const calculateOverallProgress = () => {
    const totalDays = workoutPlan.filter(day => !day.isRestDay).length;
    const completedDays = workoutPlan
      .filter(day => !day.isRestDay && day.day < progress.currentDay)
      .length;
    return (completedDays / totalDays) * 100;
  };

  const renderCalendar = () => {
    return (
      <View style={styles.calendar}>
        {Array.from({ length: DAYS_IN_PROGRAM }).map((_, index) => {
          const day = index + 1;
          const isCurrentDay = day === progress.currentDay;
          const isPastDay = day < progress.currentDay;
          const workout = workoutPlan.find(w => w.day === day);
          const isRestDay = workout?.isRestDay;

          return (
            <View
              key={day}
              style={[
                styles.calendarItem,
                isRestDay && styles.restDay,
                isCurrentDay && styles.currentDay,
                isPastDay && styles.completedDay,
              ]}
            >
              <Text
                style={[
                  styles.calendarDay,
                  isCurrentDay && styles.currentDayText,
                  isPastDay && styles.completedDayText,
                ]}
              >
                {day}
              </Text>
              {isRestDay && (
                <Text style={styles.restDayText}>R</Text>
              )}
            </View>
          );
        })}
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <Text>Loading progress...</Text>
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Your Progress</Text>
          <Text style={styles.subtitle}>30-Day Challenge</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Progress</Text>
          <ProgressBar
            currentDay={progress.currentDay}
            totalDays={DAYS_IN_PROGRAM}
            completionPercentage={getCompletionPercentage()}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overall Progress</Text>
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>{progress.currentDay}</Text>
              <Text style={styles.statLabel}>Current Day</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>
                {Math.round(calculateOverallProgress())}%
              </Text>
              <Text style={styles.statLabel}>Completed</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>
                {DAYS_IN_PROGRAM - progress.currentDay + 1}
              </Text>
              <Text style={styles.statLabel}>Days Left</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>30-Day Calendar</Text>
          <Text style={styles.calendarLegend}>
            R = Rest Day • Current = Blue • Completed = Green
          </Text>
          {renderCalendar()}
        </View>
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
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  stat: {
    alignItems: "center",
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  calendar: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  calendarItem: {
    width: CALENDAR_ITEM_SIZE,
    height: CALENDAR_ITEM_SIZE,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 2,
    backgroundColor: "#f0f0f0",
  },
  calendarDay: {
    fontSize: 16,
    fontWeight: "500",
  },
  currentDay: {
    backgroundColor: "#007AFF",
  },
  currentDayText: {
    color: "#fff",
  },
  completedDay: {
    backgroundColor: "#4CAF50",
  },
  completedDayText: {
    color: "#fff",
  },
  restDay: {
    backgroundColor: "#E0E0E0",
  },
  restDayText: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  calendarLegend: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  error: {
    color: "red",
    textAlign: "center",
  },
}); 
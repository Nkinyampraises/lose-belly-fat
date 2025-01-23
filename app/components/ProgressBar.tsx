import { View, Text, StyleSheet } from "react-native";

type ProgressBarProps = {
  currentDay: number;
  totalDays: number;
  completionPercentage: number;
};

export default function ProgressBar({
  currentDay,
  totalDays,
  completionPercentage,
}: ProgressBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Day {currentDay} of {totalDays}</Text>
        <Text style={styles.percentage}>{Math.round(completionPercentage)}%</Text>
      </View>
      
      <View style={styles.progressBackground}>
        <View 
          style={[
            styles.progressFill, 
            { width: `${completionPercentage}%` }
          ]} 
        />
      </View>
      
      <Text style={styles.subtitle}>
        {completionPercentage === 100 
          ? "Great job! Day completed!" 
          : "Keep going!"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  percentage: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
  },
  progressBackground: {
    height: 8,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#007AFF",
    borderRadius: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
    textAlign: "center",
  },
}); 
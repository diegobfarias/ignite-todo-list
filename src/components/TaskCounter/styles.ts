import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  createdTaskView: {
    flexDirection: "row",
  },
  createdTask: {
    color: "#4EA8DE",
    fontSize: 14,
    fontFamily: "Inter-Bold",
    marginRight: 8,
  },
  doneTask: {
    color: "#8284FA",
    fontSize: 14,
    fontFamily: "Inter-Bold",
    marginRight: 8,
  },
  taskCounter: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  taskCounterContainer: {
    backgroundColor: "#333333",
    borderRadius: 999,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});

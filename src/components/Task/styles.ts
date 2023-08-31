import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "auto",
    padding: 15,
    marginHorizontal: 24,
    backgroundColor: "#262626",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  task: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#F2F2F2",
  },
  taskCompleted: {
    flex: 1,
    fontSize: 14,
    color: "#808080",
    textDecorationLine: "line-through",
  },
  checkbox: {
    marginLeft: 5,
    marginRight: 12,
    borderRadius: 999,
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  topContainer: {
    padding: 24,
    alignItems: "center",
    height: 173,
    backgroundColor: "#0D0D0D",
  },
  logoImage: {
    width: 110.34,
    height: 32,
    resizeMode: "contain",
    marginTop: 50,
  },
  formView: {
    width: "100%",
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 32,
  },
  addNewTaskInput: {
    flex: 1,
    backgroundColor: "#262626",
    color: "#F2F2F2",
    height: 56,
    borderRadius: 6,
    borderColor: "#5E60CE",
    borderWidth: 0.5,
    padding: 16,
    fontSize: 16,
    fontFamily: "Inter-Regular",
    marginRight: 4,
  },
  addTaskButton: {
    backgroundColor: "#1E6F9F",
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  taskManagementContainer: {
    marginTop: 30,
    marginBottom: 50,
    padding: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  listEmptyContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  clipboardImage: {
    width: 56,
    height: 56,
  },
  listEmptyTaskMajor: {
    color: "#808080",
    fontSize: 12,
    fontFamily: "Inter-Bold",
    marginTop: 16,
    marginBottom: 2,
  },
  listEmptyTaskMinor: {
    color: "#808080",
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
});

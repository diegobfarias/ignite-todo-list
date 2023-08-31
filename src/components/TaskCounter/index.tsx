import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

type TaskCounterProps = {
  isCreated: boolean;
  counter: number;
};

export function TaskCounter({ isCreated, counter }: TaskCounterProps) {
  return (
    <View style={styles.createdTaskView}>
      <Text style={isCreated === true ? styles.createdTask : styles.doneTask}>
        {isCreated === true ? "Created" : "Completed"}
      </Text>
      <View style={styles.taskCounterContainer}>
        <Text style={styles.taskCounter}>{counter}</Text>
      </View>
    </View>
  );
}

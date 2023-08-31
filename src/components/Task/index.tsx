import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { styles } from "./styles";

type TaskProps = {
  taskDesc: string;
  isChecked: boolean;
  onTaskChecked: () => void;
  onButtonPress: () => void;
};

export function Task({
  taskDesc,
  isChecked,
  onTaskChecked,
  onButtonPress,
}: TaskProps) {
  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={onTaskChecked}
        color={isChecked ? "#5E60CE" : "#4EA8DE"}
      />
      <Text style={isChecked ? styles.taskCompleted : styles.task}>
        {taskDesc}
      </Text>

      <TouchableOpacity onPress={onButtonPress}>
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}

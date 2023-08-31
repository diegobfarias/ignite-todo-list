import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { useFonts } from "expo-font";
import { Task } from "../../components/Task";
import { TaskCounter } from "../../components/TaskCounter";

interface Task {
  id: string;
  description: string;
  checked: boolean;
}

export function Home() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/Inter-Black.ttf"),
  });

  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskDescription, setTaskDescription] = useState("");
  const [tasksCreated, setTaskCreated] = useState(0);
  const [tasksCompleted, setTaskCompleted] = useState(0);

  function handleAddNewTask() {
    if (taskDescription === "") {
      return Alert.alert(
        "It's not possible to add a new task without a description."
      );
    }
    const newTask: Task = {
      id: new Date().getTime().toString(),
      description: taskDescription,
      checked: false,
    };

    setTaskCreated((task) => task + 1);
    setTasks((previousState) => [...previousState, newTask]);
    setTaskDescription("");
  }

  function handleRemoveTask(id: string) {
    Alert.alert("Delete task", `Are you sure you want to delete this task?`, [
      {
        text: "Yes",
        onPress: () => {
          setTasks(tasks.filter((task) => task.id !== id)),
            setTaskCreated((task) => task - 1),
            setTaskCompleted((task) => task - 1),
            Alert.alert(`Task deleted.`);
        },
      },
      {
        text: "No",
        style: "cancel",
      },
    ]);
  }

  function handleCheckedTask(item: Task) {
    if (item.checked === false) {
      setTaskCompleted((completedTasks) => completedTasks + 1);

      const taskChecked: Task = {
        id: item.id,
        description: item.description,
        checked: true,
      };

      setTasks((previousState) =>
        previousState.filter((task) => task.id !== item.id)
      );
      setTasks((previousState) => [...previousState, taskChecked]);
    } else {
      const taskUnchecked: Task = {
        id: item.id,
        description: item.description,
        checked: false,
      };

      setTasks((previousState) =>
        previousState.filter((task) => task.id !== item.id)
      );

      setTasks((previousState) => [...previousState, taskUnchecked]);
    }
  }

  return (
    <View style={styles.page}>
      <View style={styles.topContainer}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logoImage}
        ></Image>

        <View style={styles.formView}>
          <TextInput
            style={styles.addNewTaskInput}
            placeholder="Add a new task"
            placeholderTextColor="#808080"
            autoCapitalize="sentences"
            value={taskDescription}
            onChangeText={setTaskDescription}
          />

          <TouchableOpacity
            style={styles.addTaskButton}
            onPress={handleAddNewTask}
          >
            <Image source={require("../../../assets/plus.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.taskManagementContainer}>
        <TaskCounter isCreated={true} counter={tasksCreated} />
        <TaskCounter isCreated={false} counter={tasksCompleted} />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            taskDesc={item.description}
            onTaskChecked={() => handleCheckedTask(item)}
            isChecked={item.checked}
            onButtonPress={() => handleRemoveTask(item.id)}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.listEmptyContainer}>
            <Image source={require("../../../assets/clipboard.png")} />
            <Text style={styles.listEmptyTaskMajor}>
              You don't have any tasks registered yet
            </Text>
            <Text style={styles.listEmptyTaskMinor}>
              Create tasks and organize your to-do items
            </Text>
          </View>
        )}
      />
    </View>
  );
}

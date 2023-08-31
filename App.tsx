import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}

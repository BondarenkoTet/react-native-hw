import { React } from "react";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import { useFonts } from "expo-font";
//import * as Font from "expo-font";

export default function App() {
  console.log(Platform.OS);
  const [fontsLoaded] = useFonts({
    "Roboto-Reg": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Med": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {/* <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>
                    Inter Black
            </Text>
      <Text style={{ fontSize: 30 }}>Platform Default</Text>
    </View> */}
      {/* <LoginScreen /> */}
      <RegistrationScreen />
      <StatusBar style="auto" />
    </>
  );
}

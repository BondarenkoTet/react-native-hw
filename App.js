import { React } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import { useFonts } from "expo-font";
import * as Font from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Reg": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Med": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            source={require("./assets/images/photo-bg.jpg")}
            style={styles.image}
          >
            <LoginScreen />
            {/* <RegistrationScreen /> */}
          </ImageBackground>
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
    //paddingBottom: 30,
  },
});

import { React } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
//import { createStackNavigator } from "@react-navigation/stack";
//import RegistrationScreen from "./screens/RegistrationScreen";
//import LoginScreen from "./screens/LoginScreen";
//import PostsScreen from "./screens/PostsScreen";
import { useFonts } from "expo-font";
// import * as Font from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Reg": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Med": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  // const MainStack = createStackNavigator();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/images/photo-bg.jpg")}
          style={styles.image}
        >
          {/* <NavigationContainer>
            <MainStack.Navigator>
              <MainStack.Screen
                //options={{ headerShown: false }}
                name="Registration"
                component={RegistrationScreen}
              />
              <MainStack.Screen
                //  options={{ headerShown: false }}
                name="Login"
                component={LoginScreen}
              />
              {/* <MainStack.Screen
              // options={{ headerShown: false }}
              name="Posts"
              component={PostsScreen}
            /> */}
          {/* </MainStack.Navigator>
          </NavigationContainer> */}
          {/* */}

          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
  },
});

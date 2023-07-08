import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
} from "react-native";

export default function LoginScreen() {
  console.log(Platform.OS);

  const initialState = {
    email: "",
    password: "",
  };

  const [isShowKeyboard, setShowIsKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setShowIsKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const resetEmail = () => {
  //   setEmail("");
  // };

  // const onLogin = () => {
  //   Alert.alert("Credentials", ` ${email} +${password}`);
  // };
  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          height: "100%",
          justifyContent: "flex-end",
        }}
      >
        <ImageBackground style={styles.bg}>
          <View style={styles.form}>
            <Text style={styles.title}>Увійти</Text>
            <View style={{ marginTop: 32 }}>
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                placeholderTextColor="#a9a9a9"
                value={state.email}
                onFocus={() => {
                  setShowIsKeyboard(true);
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                // onChangeText={setEmail}
                // onPress={resetEmail}
              />
              {/* <Button title="Очистити" onPress={resetEmail} /> */}
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Пароль"
                placeholderTextColor="#a9a9a9"
                value={state.password}
                onFocus={() => {
                  setShowIsKeyboard(true);
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
                // onChangeText={setPassword}

                // keyboardType="numeric"
              />
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.btn}
            // onPress={onLogin}
            onPress={keyboardHide}
          >
            <Text style={styles.btnTitle}>Увійти</Text>
          </TouchableOpacity>
          <Text style={styles.subTitle}>Немає акаунту? Зареєструватись</Text>
        </ImageBackground>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "flex-end",
    // paddingBottom: 10,
  },

  bg: {
    width: 375,
    height: 549,
    borderRadius: 25,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#f8f8ff",
  },
  title: {
    color: "#000000",
    fontSize: 30,
    fontFamily: "Roboto-Med",
  },
  input: {
    borderWidth: 2,
    height: 50,
    width: 343,
    borderRadius: 10,
    color: "#000000",
    backgroundColor: "#f5f5f5",
  },
  form: {
    // marginHorizontal: 10,

    alignItems: "center",
    // justifyContent: "flex-end",
    // paddingBottom: 30,
  },

  btn: {
    height: 51,
    width: 343,
    borderRadius: 16,
    marginTop: 43,
    backgroundColor: "#ff4500",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontSize: 16,
    color: "#f0f8ff",
    fontFamily: "Roboto-Reg",
  },
  subTitle: {
    fontSize: 16,
    color: "#00008b",
    marginBottom: 111,
    marginTop: 16,
    fontFamily: "Roboto-Reg",
  },
});

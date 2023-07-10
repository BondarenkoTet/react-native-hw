import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Button,
} from "react-native";

export default function RegisterScreen({ navigation }) {
  console.log(Platform.OS);
  // console.log(navigation);
  const initialState = {
    login: "",
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

  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.form}>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={{ marginTop: 32 }}>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              placeholderTextColor="#a9a9a9"
              value={state.login}
              onFocus={() => {
                setShowIsKeyboard(true);
              }}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, login: value }))
              }
            />
          </View>
          <View style={{ marginTop: 16 }}>
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
            />
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
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.btn}
            onPress={keyboardHide}
          >
            <Text style={styles.btnTitle}>Зареєструватись</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.subTitle}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  form: {
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
    fontFamily: "Roboto-Reg",
    color: "#00008b",
    marginTop: 16,
    marginBottom: 45,
  },
});

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
  TouchableWithoutFeedback,
} from "react-native";

export default function RegisterScreen() {
  console.log(Platform.OS);

  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            height: "100%",
            justifyContent: "flex-end",
          }}
        >
          <ImageBackground style={styles.bg}>
            <View style={styles.form}>
              <Text style={styles.title}>Реєстрація</Text>
              <View style={{ marginTop: 32 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Логін"
                  placeholderTextColor="#a9a9a9"
                  value={text}
                  onChangeText={setText}
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor="#a9a9a9"
                  value={text}
                  onChangeText={setText}
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Пароль"
                  placeholderTextColor="#a9a9a9"
                  value={number}
                  onChangeText={setNumber}
                />
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.btn}
              // onPress={signIn}
            >
              <Text style={styles.btnTitle}>Зареєструватись</Text>
            </TouchableOpacity>
            <Text style={styles.subTitle}>Вже є акаунт? Увійти</Text>
          </ImageBackground>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "flex-end",
    //paddingBottom: 30,
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
    // justifyContent: "center",
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

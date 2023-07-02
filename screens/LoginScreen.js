import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/photo-bg.jpg")}
      >
        <ImageBackground style={styles.bg}>
          <Text style={styles.title}>Увійти</Text>
          <View style={styles.form}>
            <View style={{ marginTop: 32 }}>
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                placeholderTextColor="#a9a9a9"
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Пароль"
                placeholderTextColor="#a9a9a9"
              />
            </View>
            <TouchableOpacity activeOpacity={0.6} style={styles.btn}>
              <Text style={styles.btnTitle}>Увійти</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subTitle}>Немає акаунту? Зареєструватись</Text>
        </ImageBackground>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
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
    justifyContent: "center",
    alignItems: "center",
  },
  bg: {
    //flex: 1,

    width: 375,
    height: 549,
    borderRadius: 25,
    justifyContent: "center",
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
    // borderColor: "#2f4f4f ",
    height: 50,
    width: 343,
    borderRadius: 10,
    color: "#f0f8ff",
    backgroundColor: "#f5f5f5",
  },
  form: {
    // marginHorizontal: 10,
  },

  btn: {
    //backgroundColor: "FF6C00",
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

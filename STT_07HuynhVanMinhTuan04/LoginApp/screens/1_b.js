import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  LogBox,
} from "react-native";
import lockImg from "../assets/img/lock.png";
import mailImg from "../assets/img/mail.png";

const ThirdScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.imgLock} source={lockImg} />
        <Text style={styles.textIn}>FORGET {"\n"} PASSWORD</Text>
        <Text style={styles.textDes}>
          Provide your account’s email for which you want to reset your password
        </Text>
        <View style={styles.mailTouch}>
          <Image style={styles.imgMail} source={mailImg} />
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              marginTop: 12,
              fontWeight: 490,
            }}
          >
            Email
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonNext}>
          <Text
            style={{ fontSize: 18, textAlign: "center", fontWeight: "bold" }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: 360,
    height: 640,
    backgroundColor: "transparent",
    backgroundImage:
      "linear-gradient(180deg, #C7F4F6 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)",
    alignItems: "center",
  },
  imgLock: {
    width: 105,
    height: 117,
    marginTop: 76,
  },
  imgMail: {
    width: 48,
    height: 45,
  },
  textIn: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    lineHeight: "normal",
    marginTop: 37,
  },
  textDes: {
    textAlign: "center",
    marginTop: 32,
    width: 302,
    height: 52,
    fontSize: 15,
    fontWeight: 700,
  },
  mailTouch: {
    width: 305,
    height: 45,
    backgroundColor: "#C4C4C4",
    flexDirection: "row",
  },
  buttonNext: {
    backgroundColor: "#E3C000",
    width: 305,
    height: 45,
    marginTop: 43,
    justifyContent: "center",
  },
});

export default ThirdScreen;

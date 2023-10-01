import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CirlceImg from "../assets/img/Ellipse8.png";

const FirstScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.img} source={CirlceImg} />
        <Text style={styles.textIn}>GROW {"\n"}YOUR BUSINESS</Text>
        <Text style={styles.textDes}>
          We will help you to grow your business using{"\n"}online server
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                alignSelf: "center",
                marginTop: 10,
                fontSize: 20,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSign}>
            <Text
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                alignSelf: "center",
                marginTop: 10,
                fontSize: 20,
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 21,
            textTransform: "uppercase",
          }}
        >
          How we work?
        </Text>
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
  },
  img: {
    alignSelf: "center",
    marginTop: 69,
    width: 140,
    height: 140,
  },
  textIn: {
    fontSize: 25,
    marginTop: 66,
    fontWeight: "bold",
    textAlign: "center",
  },
  textDes: {
    fontSize: 15,
    lineHeight: 17.58,
    marginTop: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 50,
    flexDirection: "row",
  },
  buttonLogin: {
    backgroundColor: "#E3C000",
    width: 125,
    height: 45,
    marginLeft: 30,
  },
  buttonSign: {
    backgroundColor: "#E3C000",
    width: 125,
    height: 45,
    marginLeft: 54,
  },
});

export default FirstScreen;

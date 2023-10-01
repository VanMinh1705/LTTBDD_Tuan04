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
      "linear-gradient(180deg, rgba(0, 204, 249, 0.00) 0%, rgba(0, 204, 249, 0.58) 30.21%, rgba(0, 204, 249, 0.70) 49.48%, rgba(0, 204, 249, 0.36) 70.83%, #00CCF9 100%)",
  },
  img: {
    alignSelf: "center",
    marginTop: 105,
    width: 140,
    height: 140,
    border: 15,
  },
  textIn: {
    fontSize: 25,
    marginTop: 52,
    fontWeight: "bold",
    textAlign: "center",
  },
  textDes: {
    fontSize: 15,
    lineHeight: 17.58,
    marginTop: 62,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 45,
    flexDirection: "row",
  },
  buttonLogin: {
    backgroundColor: "#E3C000",
    borderRadius: 10,
    width: 119,
    height: 48,
    marginLeft: 29,
  },
  buttonSign: {
    backgroundColor: "#E3C000",
    borderRadius: 10,
    width: 119,
    height: 48,
    marginLeft: 56,
  },
});

export default FirstScreen;

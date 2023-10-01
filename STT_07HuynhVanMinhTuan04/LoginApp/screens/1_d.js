import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const FiveScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: "25px",
          fontWeight: 700,
          marginTop: "40px",
        }}
      >
        Login
      </Text>
      <TextInput style={styles.txtEmail} placeholder="Email" />
      <View style={styles.sectionPass}>
        <Image
          style={{ width: "38px", height: "36px" }}
          source={require("../assets/img/iconEye.png")}
        />
        <TextInput style={styles.txtPass} placeholder="Password"></TextInput>
      </View>
      <TouchableOpacity style={styles.btnLogin}>
        <Text
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: 700,
            color: "#FFF",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          fontSize: "14px",
          fontWeight: 400,
          marginTop: "20px",
        }}
      >
        When you agree to terms and conditions
      </Text>
      <Text
        style={{
          color: "#5D25FA",
          textAlign: "center",
          fontSize: "14px",
          fontWeight: 400,
          marginTop: "12px",
        }}
      >
        For got your password?
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: "14px",
          fontWeight: 400,
          marginTop: "12px",
        }}
      >
        Or login with
      </Text>
      <View style={styles.group}>
        <View style={styles.groupIconFB}>
          <Image
            style={{
              width: "30px",
              height: "30px",
              marginLeft: 34,
              marginTop: 3,
            }}
            source={require("../assets/img/iconFacebook.png")}
          />
        </View>
        <View style={styles.groupIconZL}>
          <Text
            style={{
              width: "69px",
              height: "31px",
              color: "#FFF",
              fontSize: "40px",
              fontWeight: 700,
              marginTop: -5,
              marginLeft: 40,
            }}
          >
            Z
          </Text>
        </View>
        <View style={styles.groupIconGG}>
          <Image
            style={{
              width: "35px",
              height: "35px",
              marginLeft: 34,
              marginTop: 3,
            }}
            source={require("../assets/img/iconGG.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    width: 360,
    height: 640,
    backgroundColor: "rgba(49, 170, 82, 0.19)",
  },
  txtEmail: {
    width: 330,
    height: 54,
    border: "1px solid var(--Gray-6, #F2F2F2)",
    backgroundColor: "rgba(196, 196, 196, 0.30)",
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: 400,
    marginTop: "60px",
  },
  sectionPass: {
    width: 330,
    height: 54,
    border: "1px solid var(--Gray-6, #F2F2F2)",
    backgroundColor: "rgba(196, 196, 196, 0.30)",
    flexDirection: "row-reverse",
    alignItems: "center",
    marginTop: "30px",
  },
  txtPass: {
    width: 330,
    height: 54,
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: 400,
  },
  btnLogin: {
    width: "330px",
    height: " 45px",
    borderRadius: "2px",
    backgroundColor: "#E53935",
    marginTop: "60px",
    justifyContent: "center",
  },
  group: {
    flexDirection: "row",
    marginTop: 40,
  },
  groupIconFB: {
    width: "110px",
    height: "45px",
    borderRadius: "2px",
    backgroundColor: "#25479B",
  },
  groupIconZL: {
    width: "110px",
    height: "45px",
    borderRadius: "2px",
    backgroundColor: "#0F8EE0",
  },
  groupIconGG: {
    width: "110px",
    height: "45px",
    border: "1px solid #0680F1",
    backgroundColor: "#FFF",
  },
});

export default FiveScreen;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "./screens/FirstScreen";
import SecondScreen from "./screens/1_a";
import ThirdScreen from "./screens/1_b";
import FourScreen from "./screens/1_c";
import FiveScreen from "./screens/1_d";
import SixScreen from "./screens/1_e";
import SevenScreen from "./screens/2_a";
import XMEye from "./screens/XMEye";

import { Button, Text, StyleSheet, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>HomeScreen</Text>
      <View style={styles.content}>
        <Button
          title="FirstScreen"
          onPress={() => {
            navigation.navigate("FirtScreen");
          }}
        />
        <Button
          title="SecondScreen"
          onPress={() => {
            navigation.navigate("SecondScreen");
          }}
        />
        <Button
          title="ThirdScreen"
          onPress={() => {
            navigation.navigate("ThirdScreen");
          }}
        />
        <Button
          title="FourScreen"
          onPress={() => {
            navigation.navigate("FourScreen");
          }}
        />
        <Button
          title="FiveScreen"
          onPress={() => {
            navigation.navigate("FiveScreen");
          }}
        />
        <Button
          title="SixScreen"
          onPress={() => {
            navigation.navigate("SixScreen");
          }}
        />
        <Button
          title="SevenScreen"
          onPress={() => {
            navigation.navigate("SevenScreen");
          }}
        />
        <Button
          title="XMEye"
          onPress={() => {
            navigation.navigate("XMEye");
          }}
        />
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FirtScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
        <Stack.Screen name="FourScreen" component={FourScreen} />
        <Stack.Screen name="FiveScreen" component={FiveScreen} />
        <Stack.Screen name="SixScreen" component={SixScreen} />
        <Stack.Screen name="SevenScreen" component={SevenScreen} />
        <Stack.Screen name="XMEye" component={XMEye} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
  },
  content: {
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 10,
    paddingLeft: 20,
    marginTop: 20,
  },
});
export default App;

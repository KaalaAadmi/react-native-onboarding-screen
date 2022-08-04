import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../src/constants/theme";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

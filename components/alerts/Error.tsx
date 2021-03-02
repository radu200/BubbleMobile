import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

interface props {
  msg: string
}

const ErrorAlert = ({ msg }: props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{msg}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "80%",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: Colors.alerts.error,
    justifyContent: "center",
    alignSelf: "center",
  },

  title: {
    color: Colors.dark.text,
  }
});

export default ErrorAlert;
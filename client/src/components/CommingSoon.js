import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CommingSoon = () => {
  return (
    <View style={styles.commingsoonContainer}>
      <Text style={styles.text}>Comming Soon</Text>
    </View>
  );
};

export default CommingSoon;

const styles = StyleSheet.create({
  commingsoonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
  },
});

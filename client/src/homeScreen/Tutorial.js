import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const Tutorial = ({ navigation }) => {
  return (
    <View style={styles.TutorialContainer}>
      <Text>Tutorial</Text>
      <View style={styles.backButton}>
        <Button
          onPress={() => navigation.navigate("Intro")}
          title="Go to notifications"
        />
      </View>
    </View>
  );
};

export default Tutorial;

const styles = StyleSheet.create({
  TutorialContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    right: 10,
    left: 10,
    position: "absolute",
    bottom: 10,
    borderRadius: 20,
  },
});

import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Solutions = ({ route }) => {
  const question = route.params.Exercise;
  const solution = route.params.Solution;

  return (
    <View style={styles.solutionContainer}>
      <Text style={styles.question}>{question}</Text>

      <ScrollView style={styles.solutionBox}>
        <Text style={styles.solution}>{solution}</Text>
      </ScrollView>
    </View>
  );
};

export default Solutions;

const deviceWidth = Math.floor(Dimensions.get("window").width);

const styles = StyleSheet.create({
  solutionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    elevation: 2,
  },
  question: {
    fontSize: 20,
    margin: 10,
    fontWeight: "600",
  },
  solutionBox: {
    backgroundColor: "black",
    width: deviceWidth - 40,
    borderRadius: 10,
  },
  solution: {
    margin: 10,
    lineHeight: 20.3,
    color: "white",
    padding: 10,
    textAlign: "justify",
  },
});

import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const Variable = ({ navigation }) => {
  return (
    <View style={styles.TutorialContainer}>
      <View style={styles.innerBox}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.textHeading}>JavaScript Variable</Text>
          <Text style={styles.text}>
            A JavaScript variable is simply a name of storage location. There
            are two types of variables in JavaScript : local variable and global
            variable. There are some rules while declaring a JavaScript variable
            (also known as identifiers).
          </Text>
          <Text style={styles.text}>
            1. Name must start with a letter (a to z or A to Z), underscore( _
            ), or dollar( $ ) sign.
          </Text>
          <Text style={styles.text}>
            2. After first letter we can use digits (0 to 9), for example
            value1.
          </Text>
          <Text style={styles.text}>
            3. JavaScript variables are case sensitive, for example x and X are
            different variables.
          </Text>

          <Text style={styles.textHeading}>JavaScript local variable</Text>

          <Text style={styles.text}>
            A JavaScript local variable is declared inside block or function. It
            is accessible within the function or block only.
          </Text>

          <Text style={styles.textHeading}>JavaScript global variable</Text>

          <Text style={styles.text}>
            A JavaScript global variable is accessible from any function. A
            variable i.e. declared outside the function or declared with window
            object is known as global variable.
          </Text>
        </ScrollView>
      </View>
      <View style={styles.backButton}>
        <Button
          onPress={() => navigation.navigate("Intro")}
          title="Go to Home"
        />
      </View>
    </View>
  );
};

export default Variable;

const deviceWidth = Math.floor(Dimensions.get("window").width);
const deviceHeight = Math.floor(Dimensions.get("window").height);

const styles = StyleSheet.create({
  TutorialContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerBox: {
    width: deviceWidth - 50,
    height: deviceHeight - 200,
  },
  backButton: {
    right: 10,
    left: 10,
    position: "absolute",
    bottom: 10,
    borderRadius: 20,
  },
  textHeading: {
    fontWeight: "600",
    fontSize: 20,
    textAlign: "justify",
  },
  text: {
    textAlign: "justify",
    lineHeight: 29,
    fontSize: 15,
    marginVertical: 10,
  },
});

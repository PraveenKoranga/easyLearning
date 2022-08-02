import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const JsComment = ({ navigation }) => {
  return (
    <View style={styles.TutorialContainer}>
      <View style={styles.innerBox}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.textHeading}>JavaScript Comment</Text>
          <Text style={styles.text}>
            The JavaScript comments are meaningful way to deliver message. It is
            used to add information about the code, warnings or suggestions so
            that end user can easily interpret the code. The JavaScript comment
            is ignored by the JavaScript engine i.e. embedded in the browser.
            Advantages of JavaScript comments There are mainly two advantages of
            JavaScript comments.
          </Text>
          <Text style={styles.text}>
            1. To make code easy to understand It can be used to elaborate the
            code so that end user can easily understand the code.
          </Text>
          <Text style={styles.text}>
            2. To avoid the unnecessary code It can also be used to avoid the
            code being executed. Sometimes, we add the code to perform some
            action. But after sometime, there may be need to disable the code.
            In such case, it is better to use comments.
          </Text>

          <Text style={styles.textHeading}>Types of JavaScript Comments</Text>

          <Text style={styles.text}>
            There are two types of comments in JavaScript.
          </Text>

          <Text style={styles.text}>1. Single-line Comment</Text>
          <Text style={styles.text}>2. Multi-line Comment</Text>

          <Text style={styles.textHeading}>JavaScript Single line Comment</Text>

          <Text style={styles.text}>
            It is represented by double forward slashes (//). It can be used
            before and after the statement.
          </Text>
          <Text style={styles.text}>
            Let’s see the example of single-line comment i.e. added before the
            statement.
          </Text>
          <Text style={styles.text}>// It is single line comment</Text>
          <Text style={styles.textHeading}>JavaScript Multi line Comment</Text>

          <Text style={styles.text}>
            It can be used to add single as well as multi line comments. So, it
            is more convenient.
          </Text>
          <Text style={styles.text}>
            It is represented by forward slash with asterisk then asterisk with
            forward slash. For example:{" "}
          </Text>
          <Text style={styles.text}>/* your code here */ </Text>
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

export default JsComment;

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

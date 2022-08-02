import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const DataType = ({ navigation }) => {
  return (
    <View style={styles.TutorialContainer}>
      <View style={styles.innerBox}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.textHeading}>Javascript Data Types</Text>
          <Text style={styles.text}>
            JavaScript provides different data types to hold different types of
            values. There are two types of data types in JavaScript.
          </Text>
          <Text style={styles.text}>1. Primitive data type</Text>
          <Text style={styles.text}>
            2. Non-primitive (reference) data type
          </Text>
          <Text style={styles.text}>
            JavaScript is a dynamic type language, means you don't need to
            specify type of the variable because it is dynamically used by
            JavaScript engine. You need to use var here to specify the data
            type. It can hold any type of values such as numbers, strings etc.
          </Text>

          <Text style={styles.textHeading}>
            JavaScript primitive data types:
          </Text>
          <Text style={styles.textHeading}>String:</Text>

          <Text style={styles.text}>
            represents sequence of characters e.g. "hello"
          </Text>
          <Text style={styles.textHeading}>Number:</Text>

          <Text style={styles.text}>represents numeric values e.g. 100</Text>
          <Text style={styles.textHeading}>Boolean:</Text>

          <Text style={styles.text}>
            represents boolean value either false or true
          </Text>
          <Text style={styles.textHeading}>Undefined:</Text>

          <Text style={styles.text}>represents undefined value</Text>
          <Text style={styles.textHeading}>Null:</Text>

          <Text style={styles.text}>represents null i.e. no value at all</Text>

          <Text style={styles.textHeading}>
            JavaScript Non primitive data types:
          </Text>
          <Text style={styles.textHeading}>Object:</Text>

          <Text style={styles.text}>
            represents instance through which we can access members
          </Text>
          <Text style={styles.textHeading}>Array:</Text>

          <Text style={styles.text}>represents group of similar values</Text>
          <Text style={styles.textHeading}>RegExp:</Text>

          <Text style={styles.text}>represents regular expression</Text>
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

export default DataType;

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

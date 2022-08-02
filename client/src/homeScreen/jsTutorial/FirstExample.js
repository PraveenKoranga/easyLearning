import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const FirstExample = ({ navigation }) => {
  return (
    <View style={styles.TutorialContainer}>
      <View style={styles.innerBox}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.textHeading}>JavaScript Example</Text>
          <Text style={styles.text}>
            Javascript example is easy to code. JavaScript provides 3 places to
            put the JavaScript code: within body tag, within head tag and
            external JavaScript file.
          </Text>
          <Text style={styles.text}>1. Between the body tag of html</Text>
          <Text style={styles.text}>2. Between the head tag of html</Text>
          <Text style={styles.text}>3. In .js file (external javaScript)</Text>
          <Text style={styles.textHeading}>
            1) JavaScript Example : code between the body tag
          </Text>
          <Text style={styles.text}>
            document.write("JavaScript is a simple language for javatpoint
            learners");
          </Text>
          <Text style={styles.textHeading}>
            2) JavaScript Example : code between the head tag
          </Text>
          <Text style={styles.text}>
            Let’s see the same example of displaying alert dialog box of
            JavaScript that is contained inside the head tag. In this example,
            we are creating a function msg(). To create function in JavaScript,
            you need to write function with function_name as given below. To
            call function, you need to work on event. Here we are using onclick
            event to call msg() function.
            {/* <Html>
              <Head>
                <Script type="text/javascript">
                  function msg(){alert("Hello Javatpoint")}
                </Script>
              </Head>
              <Body>
                <Text>Welcome to JavaScript</Text>
                <Form>
                  <Input type="button" value="click" onclick="msg()" />
                </Form>
              </Body>
            </Html>
             */}
          </Text>
          <Text style={styles.textHeading}>3) External JavaScript file:</Text>
          <Text style={styles.text}>
            We can create external JavaScript file and embed it in many html
            page. It provides code re usability because single JavaScript file
            can be used in several html pages. An external JavaScript file must
            be saved by .js extension. It is recommended to embed all JavaScript
            files into a single file. It increases the speed of the webpage.
            Let's create an external JavaScript file that prints Hello
            Javatpoint in a alert dialog box.
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

export default FirstExample;

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

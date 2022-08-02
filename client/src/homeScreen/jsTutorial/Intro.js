import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const Intro = ({ navigation }) => {
  return (
    <View style={styles.TutorialContainer}>
      <View style={styles.innerBox}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.textHeading}>What is JavaScript ?</Text>
          <Text style={styles.text}>
            Our JavaScript Tutorial is designed for beginners and professionals
            both. JavaScript is used to create client-side dynamic pages.
            JavaScript is an object-based scripting language which is
            lightweight and cross-platform. JavaScript is not a compiled
            language, but it is a translated language. The JavaScript Translator
            (embedded in the browser) is responsible for translating the
            JavaScript code for the web browser. JavaScript (js) is a
            light-weight object-oriented programming language which is used by
            several websites for scripting the webpages. It is an interpreted,
            full-fledged programming language that enables dynamic interactivity
            on websites when applied to an HTML document. It was introduced in
            the year 1995 for adding programs to the webpages in the Netscape
            Navigator browser. Since then, it has been adopted by all other
            graphical web browsers. With JavaScript, users can build modern web
            applications to interact directly without reloading the page every
            time. The traditional website uses js to provide several forms of
            interactivity and simplicity.Although, JavaScript has no
            connectivity with Java programming language. The name was suggested
            and provided in the times when Java was gaining popularity in the
            market. In addition to web browsers, databases such as CouchDB and
            MongoDB uses JavaScript as their scripting and query language.
          </Text>
          <Text style={styles.textHeading}>Features of JavaScript</Text>
          <Text style={styles.text}>
            There are following features of JavaScript:
          </Text>
          <Text style={styles.text}>
            1. All popular web browsers support JavaScript as they provide
            built-in execution environments.
          </Text>
          <Text style={styles.text}>
            2. JavaScript follows the syntax and structure of the C programming
            language. Thus, it is a structured programming language.
          </Text>
          <Text style={styles.text}>
            3. JavaScript is a weakly typed language, where certain types are
            implicitly cast (depending on the operation).
          </Text>
          <Text style={styles.text}>
            4. JavaScript is an object-oriented programming language that uses
            prototypes rather than using classes for inheritance.
          </Text>

          <Text style={styles.textHeading}>History of JavaScript</Text>
          <Text style={styles.text}>
            In 1993, Mosaic, the first popular web browser, came into existence.
            In the year 1994, Netscape was founded by Marc Andreessen. He
            realized that the web needed to become more dynamic. Thus, a 'glue
            language' was believed to be provided to HTML to make web designing
            easy for designers and part-time programmers. Consequently, in 1995,
            the company recruited Brendan Eich intending to implement and embed
            Scheme programming language to the browser. But, before Brendan
            could start, the company merged with Sun Microsystems for adding
            Java into its Navigator so that it could compete with Microsoft over
            the web technologies and platforms. Now, two languages were there:
            Java and the scripting language. Further, Netscape decided to give a
            similar name to the scripting language as Java's. It led to
            'Javascript'. Finally, in May 1995, Marc Andreessen coined the first
            code of Javascript named 'Mocha'. Later, the marketing team replaced
            the name with 'LiveScript'. But, due to trademark reasons and
            certain other reasons, in December 1995, the language was finally
            renamed to 'JavaScript'. From then, JavaScript came into existence.
          </Text>
        </ScrollView>
      </View>
      {/* <View style={styles.backButton}>
        <Button
          onPress={() => navigation.navigate("FirstExample")}
          title="Go to Intro"
        />
      </View> */}
    </View>
  );
};

export default Intro;

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

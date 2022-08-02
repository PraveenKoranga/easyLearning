import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CommingSoon from "../../components/CommingSoon";

const Questions = ({ route }) => {
  const question = route.params.Question;
  const name = route.params.Name;
  var count = 1;
  const navigation = useNavigation();
  // console.log(name);
  return (
    <View style={styles.questionsContainer}>
      {question ? (
        <View style={styles.box}>
          <Text style={styles.name}>{name} Excersize</Text>

          <FlatList
            data={question}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Solutions", {
                    Solution: item.solution,
                    Exercise: item.Exercise,
                  })
                }
              >
                <Text style={styles.question}>
                  <Text style={styles.questionNum}>
                    QUESTION {item.Exercise ? count++ : count}:
                  </Text>
                  {item.Exercise}.
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                "Quize"
                // , {
                //     Solution: item.solution,
                //     Exercise: item.Exercise,
                // }
              )
            }
          >
            <Text style={styles.name}>{name} Quize</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <CommingSoon />
      )}
    </View>
  );
};

export default Questions;

const deviceWidth = Math.floor(Dimensions.get("window").width);

const styles = StyleSheet.create({
  questionsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  box: { backgroundColor: "white", elevation: 2 },
  question: {
    width: deviceWidth - 50,
    marginVertical: 10,
    marginHorizontal: 10,
    textAlign: "justify",
    fontSize: 15,
    lineHeight: 25,
  },
  questionNum: {
    fontWeight: "700",
  },
  name: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
  },
});

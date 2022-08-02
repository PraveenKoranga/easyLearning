import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CommingSoon from "../../components/CommingSoon";

const Read = ({ route }) => {
  const topicDetails = route.params.topicDetails;
  // console.log(topicDetails);
  var count = 1;

  return (
    <View style={styles.readBox}>
      {topicDetails ? (
        <FlatList
          data={topicDetails}
          keyExtractor={(item) => item.Heading}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.innerBox}>
              <Text style={styles.heading}>{item.Heading}</Text>
              <View>
                {item.para && <Text style={styles.contents}>{item.para}</Text>}
              </View>
              <View>
                {Array.isArray(item.content) ? (
                  item.content.map((content) => (
                    <View style={styles.subBox} key={content.heading}>
                      <Text style={styles.subHeading}>{content.Heading}</Text>

                      <Text style={styles.contents}>{content.defination}</Text>
                      <View>
                        {content.points &&
                          content.points.map((point) => (
                            <Text style={styles.contents} key={point.point}>
                              <Text style={styles.pointCircle}>. </Text>
                              {point.point}
                            </Text>
                          ))}
                      </View>
                      <View>
                        {content.components &&
                          content.components.map((component) => (
                            <Text
                              style={styles.contents}
                              key={component.component}
                            >
                              <Text style={styles.stepHead}>
                                {component.Heading}
                              </Text>
                              {component.defination}
                            </Text>
                          ))}
                      </View>
                      <View>
                        {content.steps &&
                          content.steps.map((step) => (
                            <Text style={styles.contents} key={step.step}>
                              <Text style={styles.stepHead}>
                                Steps {step.step ? count++ : count}:
                              </Text>
                              {step.step}
                            </Text>
                          ))}
                      </View>
                    </View>
                  ))
                ) : (
                  <Text style={styles.contents}>{item.content}</Text>
                )}
              </View>
            </View>
          )}
        />
      ) : (
        <CommingSoon />
      )}
    </View>
  );
};

export default Read;

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  readBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerBox: {
    width: deviceWidth - 50,
    paddingHorizontal: 5,
  },
  heading: {
    fontWeight: "600",
    fontSize: 20,
    marginTop: 20,
  },

  subHeading: {
    fontWeight: "600",
    fontSize: 15,
    marginTop: 20,
    marginBottom: 5,
  },
  contents: {
    lineHeight: 25,
    textAlign: "justify",
    fontSize: 15,
  },
  stepHead: {
    fontWeight: "600",
  },
  pointCircle: {
    fontSize: 30,
    fontWeight: "800",
  },
});
